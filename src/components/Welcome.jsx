import React from 'react';
import './welcome.css'

function Welcome() {
  return (
  <>
  <div id="parallax-world-of-ugg">
  
  <section>
    <div class="title">
     {/* <!-- Nav --> */}
     <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button class="navbar-toggler align-item-left" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">U9</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
           
          </ul>
        
        </div>
      </div>
    </nav>
    </div>
    <section>
      <div class="parallax-one word" >
        <h2>Welcome
          To a Full Beauty & Co Experience</h2>
      </div>
    </section>

    {/* <!-- cards --> */}
    <div class="container card_container">

    <div class="card-group ">
      {/* <!-- 1 --> */}
      <div class="card bodyeven ">
       <div class=" card-body bodyeven d-flex justify-content-center mt-4">
          <h1 >FACIALS</h1>
       </div>
        
      </div>
      <div class="card">
        <img src="https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-during-rejuvenation-procedure_343596-73.jpg?w=1060&t=st=1688234907~exp=1688235507~hmac=0ea5c256f6fa5ff13a97c56fb5eafe720a46bd12cd72718041fbc1141bc18448" class="card-img-top" alt="..."/>
        
      </div>
      {/* <!-- 2 --> */}
      <div class="card">
          <div class="card-body bodyodd d-flex justify-content-center mt-4">
             <h1>MAKE UP</h1>
          </div>
           
         </div>
      <div class="card">
        <img src="https://img.freepik.com/free-photo/preparation-hairdresser-makeup-artist_329181-1935.jpg?w=1060&t=st=1688234939~exp=1688235539~hmac=2a7c7afa487142d3c1bcbed8333aa4a699510744d514e12027665d5a2ca47909" class="card-img-top" alt="..."/>
        
      </div>
      
    </div>
    <div class="card-group ">
   {/* <!-- card 3  --> */}
      <div class="card " id="a">
        <img src="https://img.freepik.com/free-photo/beautiful-woman-has-cutting-hair-hairdresser_329181-1942.jpg?w=1060&t=st=1688235036~exp=1688235636~hmac=f2e35bfb0edbbadff24a5e31c83c75b0b8450bfa764aa46b9ee532ae7f23fb01" class="card-img-top" alt="..."/>
        
      </div>
      <div class="card " id="b">
          <div class="card-body bodyodd d-flex justify-content-center mt-4">
             <h1>HAIR STYLING</h1>
          </div>
           
         </div>

     
      <div class="card" id="c">
        <img src="https://img.freepik.com/free-photo/beautiful-woman-s-nails-hands-legs-with-beautiful-french-manicure-art-design_186202-6674.jpg?w=1060&t=st=1688235130~exp=1688235730~hmac=63fff60980ac16b06fc3ff962ae22f2f7925097aba06c9481370d9652b4af180" class="card-img-top" alt="..."/>
        
      </div>
      <div class="card " id="d">
          <div class="card-body bodyeven d-flex justify-content-center mt-4">
             <h1>NAILS</h1>
          </div>
           
         </div>

    </div>
  </div>

  </section>
  
  

 
 
  
 
  
  

  
    
  
    
  </div>
  </>
  )
}

export default Welcome