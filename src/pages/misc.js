import React from 'react'

const misc = () => {
  return (
    <div className="hobbiesDiv container">
      <div className="mt-5 text-center pb-5">
          <h4> <span style={{fontSize: "150%"}} className="wave mx-1">🏗️</span> Stuff that's kinda useful</h4>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px"}}>
        <div className="text-left mb-3">
          <div className="h4">DeskGenius </div>
          <div className="h5">
            <a href="https://deskgenius.vercel.app/" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff"}}>deskgenius.vercel.app <i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        <div>
          DeskGenius is a software that utilizes 3D rendering technology to help you visualize table arrangements before making a purchase. 
          Whether you're setting up a home office, workspace, or gaming station, DeskGenius allows you to explore different desk configurations in a virtual environment. 
          By combining the power of Next.js and Three Fiber (Three.js), DeskGenius offers an interactive and immersive experience that saves you time, money, and energy in creating your dream setup.
        </div>
        <div className="mt-3 d-flex flex-wrap">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffe0b3", borderRadius: "20px", border: "2px solid #ff9900" }}>
            <span style={{ color: "#ff9900" }}>&#x2022;</span> Next.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6fff2", borderRadius: "20px", border: "2px solid #00994d" }}>
            <span style={{ color: "#00994d" }}>&#x2022;</span> React.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccebff", borderRadius: "20px", border: "2px solid #006bb3" }}>
            <span style={{ color: "#006bb3" }}>&#x2022;</span> Three Fiber
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffffb3", borderRadius: "20px", border: "2px solid #cccc00" }}>
            <span style={{ color: "#cccc00" }}>&#x2022;</span> JavaScript
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccffff", borderRadius: "20px", border: "2px solid #00b3b3" }}>
            <span style={{ color: "#00b3b3" }}>&#x2022;</span> Vercel
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6ccff", borderRadius: "20px", border: "2px solid #6600cc" }}>
            <span style={{ color: "#6600cc" }}>&#x2022;</span> Tailwind CSS
          </div>
        </div>
      </div>
      
      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem"}}>
        <div className="text-left mb-3">
          <div className="h4">PetroForecast </div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/petroforecast" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff"}}>thisisadityapatel/petroforecast <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div>
          Eduardo Saverin (context: mark zuckerberg's friend) made 300k during his summer at harvard betting on heating oil futures, crazy! Built this Full Stack Machine Learning project to visualize and predict the data and to understand his bet from a prespect of smart analytics.
        </div>
        <div className="mt-3 d-flex flex-wrap">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffccff", borderRadius: "20px", border: "2px solid #800080" }}>
            <span style={{ color: "#800080" }}>&#x2022;</span> Python
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#99ddff", borderRadius: "20px", border: "2px solid #0099e6" }}>
            <span style={{ color: "#0099e6" }}>&#x2022;</span> Jupyter
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6fff2", borderRadius: "20px", border: "2px solid #00994d" }}>
            <span style={{ color: "#00994d" }}>&#x2022;</span> React.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffffb3", borderRadius: "20px", border: "2px solid #cccc00" }}>
            <span style={{ color: "#cccc00" }}>&#x2022;</span> JavaScript
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#d1e0e0", borderRadius: "20px", border: "2px solid #476b6b" }}>
            <span style={{ color: "#476b6b" }}>&#x2022;</span> SQLite3
          </div>
        </div>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem"}}>
        <div className="text-left mb-3">
          <div className="h4">SchedulingSignals</div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/schedulingSignals_OperatingSystem" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff"}}>thisisadityapatel/schedulingSignals<i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div>
          Project focused on multiprocessing with Round Robin (RR) and Lucky 7 (L7) algorithms for inter-process communication via. signals in C and Bash Scripts, having master-worker cluster architecture. Minimized latency and optimized data synchronization through algorithms, facilitating seamless inter-process coordination.
        </div>
        <div className="mt-3 d-flex flex-wrap">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#cfcccc", borderRadius: "20px", border: "2px solid #4d4d4d" }}>
            <span style={{ color: "#4d4d4d" }}>&#x2022;</span> C Programming
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#8adcf2", borderRadius: "20px", border: "2px solid #118cad" }}>
            <span style={{ color: "#118cad" }}>&#x2022;</span> Bash Scripting
          </div>
        </div>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem", marginBottom: "5em"}}>
        <div className="text-left mb-3">
          <div className="h4">SecureCash</div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/SecureCash" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff"}}>thisisadityapatel/SecureCash<i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div>
          Java-based graphical user interface (GUI Java Swing) ATM system that enables secure and easier transactions. Object orientated structure to its core alongside a live database to store and collect transaction data.
        </div>
        <div className="mt-3 d-flex flex-wrap">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccffff", borderRadius: "20px", border: "2px solid #00b3b3" }}>
            <span style={{ color: "#00b3b3" }}>&#x2022;</span> Java
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#c2939e", borderRadius: "20px", border: "2px solid #4f0919" }}>
            <span style={{ color: "#4f0919" }}>&#x2022;</span> Java Swing
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#d1e0e0", borderRadius: "20px", border: "2px solid #476b6b" }}>
            <span style={{ color: "#476b6b" }}>&#x2022;</span> SQLite3
          </div>
        </div>
      </div>
    </div>
  )
}

export default misc
