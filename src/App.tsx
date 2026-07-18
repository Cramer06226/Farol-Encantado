import { useState, useEffect, useRef, useCallback } from "react";
import { gameCards } from "./gameData";
import "./App.css";

type ItemStatus = "unmatched" | "selected" | "matched";
type LampState = "off" | "correct" | "wrong";
type ItemType = "question" | "answer";

interface GameItem {
  id: string;
  text: string;
  type: ItemType;
  pairId: number;
  status: ItemStatus;
}

function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [gameItems, setGameItems] = useState<GameItem[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [lampState, setLampState] = useState<LampState>("off");
  const [score, setScore] = useState<number>(0);
  const [matchesCount, setMatchesCount] = useState<number>(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lampTimeoutRef = useRef<number | null>(null);

  const shuffleArray = <T,>(arr: T[]): T[] => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const initGame = useCallback((cardIndex: number) => {
    const card = gameCards[cardIndex];
    const questions: GameItem[] = card.items.map((item, idx) => ({
      id: `q-${idx}`,
      text: item.question,
      type: "question",
      pairId: idx,
      status: "unmatched",
    }));

    const answers: GameItem[] = card.items.map((item, idx) => ({
      id: `a-${idx}`,
      text: item.answer,
      type: "answer",
      pairId: idx,
      status: "unmatched",
    }));

    setGameItems([...questions, ...shuffleArray(answers)]);
    setSelectedQuestion(null);
    setLampState("off");
    setMatchesCount(0);
    if (lampTimeoutRef.current) {
      clearTimeout(lampTimeoutRef.current);
      lampTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    initGame(selectedCardIndex);
  }, [selectedCardIndex, initGame]);

  const playSound = (type: "correct" | "wrong") => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (type === "correct") {
      oscillator.frequency.setValueAtTime(880, ctx.currentTime);
      oscillator.frequency.setValueAtTime(1100, ctx.currentTime + 0.1);
      oscillator.frequency.setValueAtTime(1320, ctx.currentTime + 0.2);
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.35);
    } else {
      oscillator.frequency.setValueAtTime(200, ctx.currentTime);
      oscillator.type = "sawtooth";
      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.25);
    }
  };

  useEffect(() => {
    const onInteraction = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
    };
    document.addEventListener("click", onInteraction, { once: true });
    document.addEventListener("touchstart", onInteraction, { once: true });
    return () => {
      document.removeEventListener("click", onInteraction);
      document.removeEventListener("touchstart", onInteraction);
    };
  }, []);

  const handleItemClick = (item: GameItem) => {
    if (item.status === "matched") return;

    if (lampTimeoutRef.current) {
      clearTimeout(lampTimeoutRef.current);
      lampTimeoutRef.current = null;
    }

    if (item.type === "question") {
      if (selectedQuestion === item.id) {
        setSelectedQuestion(null);
      } else {
        setSelectedQuestion(item.id);
      }
      return;
    }

    if (item.type === "answer" && selectedQuestion) {
      const questionItem = gameItems.find((i) => i.id === selectedQuestion);
      if (!questionItem) return;

      if (questionItem.pairId === item.pairId) {
        playSound("correct");
        setLampState("correct");
        setScore((s) => s + 1);
        setMatchesCount((m) => m + 1);
        setGameItems((items) =>
          items.map((i) =>
            i.pairId === item.pairId ? { ...i, status: "matched" } : i
          )
        );
      } else {
        setLampState("wrong");
        lampTimeoutRef.current = window.setTimeout(() => {
          setLampState("off");
          setSelectedQuestion(null);
        }, 600);
        return;
      }

      setSelectedQuestion(null);
    }
  };

  const questions = gameItems.filter((i) => i.type === "question");
  const answers = gameItems.filter((i) => i.type === "answer");

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCardIndex(parseInt(e.target.value, 10));
  };

  const handleReiniciar = () => {
    initGame(selectedCardIndex);
  };

  const proximaCartela = () => {
    const nextIndex = (selectedCardIndex + 1) % gameCards.length;
    setSelectedCardIndex(nextIndex);
  };

  return (
    <div className="game-container">
      <div className="board">
        <div className="lamp-container">
          <svg
            className={`lamp ${lampState}`}
            viewBox="0 0 100 120"
            width="60"
            height="72"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <ellipse cx="50" cy="15" rx="20" ry="8" fill="#4a4035" />
            <rect x="30" y="13" width="40" height="4" fill="#3d362d" />
            <rect x="35" y="17" width="30" height="25" fill="#e8dcc8" />
            <ellipse cx="50" cy="45" rx="25" ry="30" fill="#e8dcc8" />
            <ellipse cx="50" cy="45" rx="22" ry="27" fill="#f5f0e6" />
            <path
              d="M42 35 Q50 20 58 35"
              stroke="#c9a227"
              strokeWidth="2"
              fill="none"
              className="filament"
            />
            <ellipse cx="50" cy="45" rx="15" ry="18" fill="transparent" className="lamp-glass" />
          </svg>
        </div>

        <div className="theme-selector">
          <select
            value={selectedCardIndex}
            onChange={handleThemeChange}
            className="theme-dropdown"
          >
            {gameCards.map((card, idx) => (
              <option key={idx} value={idx}>
                {idx + 1}. {card.theme}
              </option>
            ))}
          </select>
        </div>

        <div className="game-area">
          <div className="column questions-column">
            <div className="column-header">Perguntas</div>
            <div className="items-list">
              {questions.map((item) => (
                <button
                  key={item.id}
                  className={`item question ${item.status} ${
                    selectedQuestion === item.id ? "selected" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                  disabled={item.status === "matched"}
                >
                  <span className="item-text">{item.text}</span>
                  {item.status === "matched" && (
                    <span className="check-mark">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="column answers-column">
            <div className="column-header">Respostas</div>
            <div className="items-list">
              {answers.map((item) => (
                <button
                  key={item.id}
                  className={`item answer ${item.status}`}
                  onClick={() => handleItemClick(item)}
                  disabled={item.status === "matched" || !selectedQuestion}
                >
                  <span className="item-text">{item.text}</span>
                  {item.status === "matched" && (
                    <span className="check-mark">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="score-bar">
          <span>Acertos: {matchesCount}/5</span>
          <span>Pontuação: {score}</span>
          {matchesCount === 5 && (
            <span className="completed-msg">Parabéns! Completo!</span>
          )}
        </div>

        <div className="buttons-row">
          <button className="action-btn reiniciar" onClick={handleReiniciar}>
            Reiniciar
          </button>
          <button className="action-btn proximo" onClick={proximaCartela}>
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
