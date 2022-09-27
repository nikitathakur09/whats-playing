import Particles from "react-tsparticles";

export default function background() {
  return (
    <div >
      <Particles
        options={{
          background: {
            color: "#181A18"
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              limit: 0,
              value: 300
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            "shape": {
              "type": "image",
              "image": {
                "src": "https://i.pinimg.com/736x/e2/0a/4e/e20a4eea4409eff4a8beb0883ae631c3.jpg",
                
               
                "width": 1,
                "height": 1
              }
            },
            size: {
             value:20
            }
          }
        }}
      />
    </div>
  );
}
