var flames = [
    {
        position: "-0.32627 1.70087 -4.01265",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "0.39703 1.70087 -4.08407",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "-0.224 1.70087 -4.264",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "0.007 1.70087 -4.366",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "0.277 1.70087 -4.306",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "0.383 1.70087 -3.785",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "0.195 1.70087 -3.557",
        from: "-10 0 0",
        to: "10 0 0"
    },
    {
        position: "-0.084 1.70087 -3.572",
        from: "0 0 10",
        to: "0 0 15"
    },
    {
        position: "-0.287 1.70087 -3.765",
        from: "0 -15 0",
        to: "0 15 0"
    }
]
var videosLeft = [
    {
        position: "-9.289 2.870 16",
        src: "#video1"
    },
    {
        position: "-9.289 2.870 8",
        src: "#video2"

    },
    {
        position: "-9.289 2.870 0",
        src: "#video3"

    },
]
var videosRight = [
    {
        position: "9.289 2.870 16",
        src: "#video4"
    },
    {
        position: "9.289 2.870 8",
        src: "#video5"

    },
    {
        position: "9.289 2.870 0",
        src: "#video6"

    },
]

AFRAME.registerComponent('birthday-party', {
    init: function () {
        var sceneEl = document.querySelector('a-scene');
        var cake = sceneEl.querySelector('#cake-parent');
        flames.map(flame => {
            var fl = document.createElement('a-entity');
            fl.setAttribute('obj-model', { mtl: "./asset/cake/flame.mtl", obj: "./asset/cake/flame.obj" });
            fl.setAttribute('position', flame.position);
            fl.setAttribute('material', "");
            fl.setAttribute('animation__flame', { dir: 'alternate', from: flame.from, to: flame.to, property: 'rotation', loop: 1000, duration: 800 });
            fl.setAttribute('scale', { x: 0.7, y: 0.7, z: 0.7 });
            cake.appendChild(fl);
        })

        cake = sceneEl.querySelector('#tv-parent');
        videosLeft.map(flame => {
            var p = document.createElement('a-entity');
            var fl = document.createElement('a-entity');
            var vd = document.createElement('a-video');
            fl.setAttribute('obj-model', { mtl: "#tv-mtl", obj: "#tv-obj" });
            p.setAttribute('position', flame.position);
            p.setAttribute('rotation', "0 90 0");
            fl.setAttribute('material', "");
            fl.setAttribute('scale', { x: 3, y: 3, z: 1 });
            vd.setAttribute('src', flame.src);
            vd.setAttribute('geometry', { width: "5.8", height: "3.4" });
            vd.setAttribute('position', "-0.004 2.19069 -0.285");
            vd.addEventListener('click', function () {
                var vids = document.querySelectorAll(".myvideos");
                for (i = 0; i < vids.length; i++) {
                    vids[i].pause();
                }
                fur = document.querySelector(this.getAttribute('src'))
                if (fur.paused)
                    fur.play();
                else fur.pause();

            });
            p.appendChild(fl)
            p.appendChild(vd)
            cake.appendChild(p);
        })
        videosRight.map(flame => {
            var p = document.createElement('a-entity');
            var fl = document.createElement('a-entity');
            var vd = document.createElement('a-video');
            fl.setAttribute('obj-model', { mtl: "#tv-mtl", obj: "#tv-obj" });
            p.setAttribute('position', flame.position);
            p.setAttribute('rotation', "0 -90 0");
            fl.setAttribute('material', "");
            fl.setAttribute('scale', { x: 3, y: 3, z: 1 });
            vd.setAttribute('src', flame.src);
            vd.setAttribute('geometry', { width: "5.8", height: "3.4" });
            vd.setAttribute('position', "-0.004 2.19069 -0.285");
            vd.addEventListener('click', function () {
                var vids = document.querySelectorAll(".myvideos");
                for (i = 0; i < vids.length; i++) {
                    vids[i].pause();
                }
                fur = document.querySelector(this.getAttribute('src'))
                if (fur.paused)
                    fur.play();
                else fur.pause();

            });
            p.appendChild(fl)
            p.appendChild(vd)
            cake.appendChild(p);
        })
        var wall = document.querySelector("#back-walll");
        wall.addEventListener('click', function () {
            var vids = document.querySelectorAll(".myvideos");
            for (i = 0; i < vids.length; i++) {
                vids[i].pause();
            }
        });

    }
});