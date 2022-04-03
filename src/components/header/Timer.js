import { React, useEffect, useState } from 'react'

export default function Timer() {


    const { now, setNow } = useState('');
    const { h, setH } = useState('');
    const { m, setM } = useState('');
    const { s, setS } = useState('');
    const {session , setSession} =useState('')
    
    useEffect(() => {
            const timer = () => {
            setNow(new Date());
            setH(now.getHours());
            setM(now.getMinutes());
            setS(now.getSeconds());
            if (h > 12) {
                setH(h - 12)
                setSession('pm')
            }
            setH((h < 10) ? "0" + h : h)
            setM((m < 10) ? "0" + m : m)
            setS((s < 10) ? "0" + s : s)

            setTimeout(timer, 1000);

        }
        timer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        } , [s , m , h , setH , setM , setS])
    
    

  return (
      <div>
          <div className='items'>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
              </div>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
              </div>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
              </div>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
              </div>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
              </div>
              <div>
                  <p>icon</p>
                  <p>رژ لب</p>
            </div>
          </div>
          <div className='timer'>
            {h + ":" + m + ":" + s + " " + session}
          </div>
      </div>
  )
}
