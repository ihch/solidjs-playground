import { Component, createMemo, createSignal } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {
  const [count, setCount] = createSignal<number>(0);
  const isNatural = createMemo(() => count() >= 0);

  return (
    <div class={styles.App}>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>count up</button>
      <button onClick={() => setCount((prev) => prev - 1)} disabled={isNatural()}>count down</button>
    </div>
  );
};

export default App;
