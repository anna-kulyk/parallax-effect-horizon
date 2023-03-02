window.addEventListener('load', () => {

    window.addEventListener('scroll', () => {
        let screenWidth = window.outerWidth;
        if (screenWidth <= 900) return;

        let scrollValue = window.scrollY;
        let parallaxHeight = document.querySelector('.parallax').offsetHeight;
        let parallaxScrollPercent = scrollValue / parallaxHeight * 100;

        if (scrollValue > parallaxHeight) {
            // document.querySelector('.parallax').style.position = 'relative';
            // document.querySelectorAll('.wrapper').style.position = 'relative';

            // document.querySelector('.parallax').style.position = 'absolute';
            // document.querySelector('.parallax').style.top = '100vh';
            // let parallaxEelements = document.querySelectorAll('.parallax__element');
            // parallaxEelements.forEach(element => {
            //     element.style.position = 'absolute';
            // })
            // document.querySelector('.main').style.position = 'absolute';
            // document.querySelector('.main').style.top = '100vh';
            
            return;
        }

        let mountain = document.querySelector('.mountain');
        let mountainWidth = screenWidth;
        mountain.style.width = `${mountainWidth + (screenWidth * 0.5 * parallaxScrollPercent / 100)}px`;
        mountain.style.transform = `translate(-${ 50 * parallaxScrollPercent / 100 }%, 0%)`;
        mountain.style.left = `${50 * parallaxScrollPercent / 100}%`

        let village = document.querySelector('.village');
        let villageWidth = screenWidth * 2;
        village.style.width = `${villageWidth - (screenWidth * 0.73 * parallaxScrollPercent / 100)}px`;
        village.style.transform = `translate(-${ 53 - (3 * parallaxScrollPercent / 100) }%, ${ 17 - (7 * parallaxScrollPercent / 100) }%)`;

        let deer = document.querySelector('.deer');
        let deerWidth = screenWidth * 1.7;
        deer.style.width = `${deerWidth - (screenWidth * 0.55 * parallaxScrollPercent / 100)}px`;
        deer.style.transform = `translate(-${ 45 + (5 * parallaxScrollPercent / 100) }%, 10%)`;
    })

    let stickyObserver = new IntersectionObserver(function(entries) {

        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                document.querySelector('header').classList.add("sticky");
                console.log('here!!!')

                document.querySelector('.parallax').style.position = 'absolute';
                document.querySelector('.parallax').style.top = '100vh';
                let parallaxEelements = document.querySelectorAll('.parallax__element');
                parallaxEelements.forEach(element => {
                    element.style.position = 'absolute';
                })
                document.querySelector('.main').style.position = 'absolute';
                document.querySelector('.main').style.top = '100vh';
            }
            else {
                document.querySelector('header').classList.remove("sticky");

                document.querySelector('.parallax').style.position = 'none';
                document.querySelector('.parallax').style.top = 'none';
                let parallaxEelements = document.querySelectorAll('.parallax__element');
                parallaxEelements.forEach(element => {
                    element.style.position = 'fixed';
                })
                document.querySelector('.main').style.position = 'relative';
                document.querySelector('.main').style.top = 'none';
            }
        });
    }, { threshold: [0] });
    
    stickyObserver.observe(document.querySelector('header'));
})