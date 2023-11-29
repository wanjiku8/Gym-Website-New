const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

    //   remove menu mobile
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav-manu')
        // when we click on any nav link we remove the show menu
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));



    const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
   }

    window.addEventListener('scroll', scrollHeader)


    const sections = document.querySelectorAll('section[id]')
  const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsettop -58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[hres*=' + sectionId)

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
              ){
                sectionClass.classList.add('active-link')

              }else{
                sectionClass.classList.remove('active-link')
              }

    })
 
  }

  window.addEventListener('scroll', scrollActive)

    const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')

      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
    }

    window.addEventListener('scroll', scrollUp)







   const calculateForm = document.getElementById('calculate-form'),
         calculateCm = document.getElementById('calculate-cm'),
         calculateKg = document.getElementById('calculate-kg'),
         calculateMessage = document.getElementById('calculate-message')
      
   const calculateBmi = (e) =>{
    e.preventDefault()

    // chechk if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === '') {

      calculateMessage.classList.remove('color-green')
      calculateMessage.classList.add('color-red')

      // show message
      calculateMessage.textContent = 'Fill in the Height and Weight'

      setTimeout(() =>{
        calculateMessage.textContent = ''
      }, 3000)

    }else{

      const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

            if(bmi < 18.5){
              calculateMessage.classList.add('color-green')
              calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
            }else if(bmi < 25){
              calculateMessage.classList.add('color-green')
              calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
            }else{
                calculateMessage.classList.add('color-green')
                calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
            }

            // claer input field
            calculateCm.value = ''
            calculateKg.value = ''   
            
            // remove message 4 seconds
            setTimeout(() =>{
              calculateMessage.textContent = ''
            }, 4000)
    }
   }     

   calculateForm.addEventListener('submit', calculateBmi)


   const contactForm = document.getElementById('contact-form'),
         contactMessage = document.getElementById('contact-message'),
         contactUser = document.getElementById('contact-user')

   const sendEmail = (e) => {
         e.preventDefault()

        //  check if the field has a  value
        if (contactUser.value === ''){
          // add and remove color
          contactMessage.classList.remove('color-green')
          contactMessage.classList.add('color-red')

          // show message

          contactMessage.textContent = 'You must enter your email'
          //  remove message 3 seconds
          setTimeout(() =>{
          contactMessage.textContent =''
          },3000)

        }else{
          emailjs.sendForm('','','','')   
          .then(() =>{
            // show message and add color
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully'

            setTimeout(() => {
              contactMessage.textContent = ''
            }, 3000)
          }, (error) =>{
            alert('OOPS! SOMETHING HAS FAILED...', error)
          })

          // clear input field
          contactUser.value = ''
        }
   }

   contactForm.addEventListener('submit', sendEmail)