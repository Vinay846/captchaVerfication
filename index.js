const ids = [];
        let count = 0;
        const arr = ["img1", "img2", "img3", "img4", "img5"];
        const arrObj = {img1 : "https://b.rgbimg.com/users/l/lu/lusi/600/mgv4s5E.jpg",
        img2 : "https://miro.medium.com/max/545/1*UNf6kxqv_ujIjKoMI0q97A.png",
        img3 : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201910/lizard-426905_960_720.jpeg?ZNAn7pXV8RrhamNppEDwUBv7dfTSqSu.&size=770:433",
        img4 : "https://pngimg.com/uploads/camel/camel_PNG23433.png",
        img5 : "https://images.livemint.com/img/2020/06/02/600x338/AFP_1R05LI_1591069920232_1591069935845.jpg"};
        function randomizationOfImg() {
            const btn = document.getElementById('btn');
            const reset = document.getElementById('reset');
            const para = document.getElementById('para');
            const  cboxes = document.querySelectorAll('#container img');
            const arrSize = arr.length;
            const randomIndex = Math.floor(Math.random()*arrSize);
            btn.style.visibility = 'hidden';
            reset.style.visibility = 'hidden';
            para.style.visibility = 'hidden';
            count = 0;
            const newArr = [...arr];
            newArr.push(arr[randomIndex]);
            const sharrr = [...shuffle(newArr)];
            for(let i=0; i<cboxes.length; i++){
                cboxes[i].className = "";
            }
            for(let i=0; i<cboxes.length; i++){
                cboxes[i].classList.add(sharrr[i]);
                cboxes[i].src = arrObj[sharrr[i]];
            }
        }

        function shuffle(arr){
            const shuffleArr = [...arr];
            const N = arr.length;
            for(let i=0; i<N; i++) {
                const randomIndex = i + Math.floor(Math.random()*(N-i));

                const temp = shuffleArr[randomIndex];
                shuffleArr[randomIndex] = shuffleArr[i];
                shuffleArr[i] = temp;
            }
            return shuffleArr;
        }

        
        function getbox() {
            const btn = document.getElementById('btn');
            const reset = document.getElementById('reset');
            const  boxes = document.querySelectorAll('#container img');
            let prevId = 420;
            for(let box of boxes){
                box.onclick = function () {
                    if(this.id === prevId){
                        return;
                    }
                    prevId = this.id;
                    reset.style.visibility = 'visible';
                    count++;
                    if(count >= 2){
                        btn.style.visibility = 'visible';
                    }
                    if(ids.length === 2){
                        
                        let currid = ids.shift();
                        const currele = document.getElementById(currid);
                        currele.classList.remove('tick');
                    }
                    this.classList.add('tick');
                    ids.push(this.id);

                }
            }
        }

        function verify() {
            const first = document.getElementById(ids[0]);
            const sec = document.getElementById(ids[1]);
            const para = document.getElementById('para');
            para.style.visibility = "visible"
            if(ids[0] !== ids[1] && first.className === sec.className){
                para.innerText = "You are a human. Congratulations!";
            }else{
                para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
            }
        }