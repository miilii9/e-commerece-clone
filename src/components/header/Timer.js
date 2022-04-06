import { React, useEffect, useState } from 'react';

export default function Timer() {
  const [now, setNow] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);
  const [session, setSession] = useState('');

  useEffect(() => {
    const timer = () => {
      setNow(Date.now());
      setH(now.getHours());
      setM(now.getMinutes());
      setS(now.getSeconds());
      if (h > 12) {
        setH(h - 12);
        setSession('pm');
      }
      setH(h < 10 ? '0' + h : h);
      setM(m < 10 ? '0' + m : m);
      setS(s < 10 ? '0' + s : s);

      setTimeout(timer, 1000);
    };
    timer();
  }, [now, s, m, h, setH, setM, setS, setSession, setNow]);

  return (
    <div>
      <div className="timer">{h + ':' + m + ':' + s + ' ' + session}</div>
    </div>
  );
}
