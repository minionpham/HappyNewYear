

import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import './App.css'

function App() {
  const fireworksRef = useRef(null)
  return (
    <div className="container">
      <div className="fireworks-area">
        <Fireworks
          ref={fireworksRef}
          options={{
            // Hiệu ứng hạt
            opacity: 0.8,
            particles: 150,
            explosion: 8,
            intensity: 40,
            
            // Trọng lực và ma sát - tạo hiệu ứng rơi tự nhiên
            gravity: 1.5,
            friction: 0.97,
            
            // Hiệu ứng trail (đuôi sao)
            traceLength: 3,
            traceSpeed: 10,
            
            // Tốc độ và gia tốc
            acceleration: 1.02,
            
            // Hiệu ứng lấp lánh
            flickering: 50,
            
            // Độ sáng ngẫu nhiên
            brightness: {
              min: 50,
              max: 80,
            },
            
            // Độ phân rã (hạt mờ dần)
            decay: {
              min: 0.015,
              max: 0.03,
            },
            
            // Delay giữa các quả pháo
            delay: {
              min: 30,
              max: 60,
            },
            
            // Màu sắc đa dạng như pháo hoa thật
            hue: {
              min: 0,
              max: 360,
            },
            
            // Rocketz (pháo bay lên)
            rocketsPoint: {
              min: 30,
              max: 70,
            },
            
            // Âm thanh (nếu muốn bật)
            sound: {
              enabled: false,
              files: [],
              volume: {
                min: 2,
                max: 4,
              },
            },
            
            // Kích thước cửa sổ nổ
            lineWidth: {
              explosion: {
                min: 1,
                max: 3,
              },
              trace: {
                min: 0.5,
                max: 1,
              },
            },
            
            // Kích thước pháo hoa
            lineStyle: 'round',
          }}
        />
      </div>

      <div className="content">
        <h1 className="title">Happy New Year Nhi :D
          <div className="animate-color">
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
            <div className="animate-color__item"></div>
          </div>
        </h1>
        {/* Nếu muốn custom nâng cao thì sử dụng ref như ví dụ dưới đây mình làm nút Restart nhé */}
        {/* <button onClick={() => fireworksRef?.current?.clear()}>Restart</button> */}
      </div>
    </div>
  )
}

export default App
