// This code is for increasing input field of language add button-------------------------------/////
const langAdd = document.querySelector('#lang-add');
langAdd.addEventListener('click',(e)=>{
  e.preventDefault();
//   const newLang = ` <input type="email" class="form-control mt-3" id="exampleFormControlInput1" placeholder="Germany" /> `
  const newLang = document.createElement('input');
  newLang.setAttribute('type', 'text');
  newLang.setAttribute("id", "i-lang");
  newLang.setAttribute("placeholder", "New Language");
  newLang.className = 'form-control'
  newLang.classList.add("mt-3");
//   const lang = document.querySelector('#lang');
//   lang.appendChild(newLang);
// console.log(newLang);
const lang = document.querySelector('#lang');
 lang.appendChild(newLang);
})

// This code is for increasing input field of Expertise add button-----------------------------------/////
const addExp = document.querySelector('#add-exp');
addExp.addEventListener('click',(e)=>{
  e.preventDefault();

  const newExp = document.createElement('input');
  newExp.setAttribute('type', 'text');
  newExp.setAttribute("id", "i-exp");
  newExp.setAttribute("placeholder", "New Expertise");
  newExp.className = 'form-control'
  newExp.classList.add("mt-3");
console.log(newExp);
const exp = document.querySelector('#exp');
 exp.appendChild(newExp);
})


// This code is for increasing input field of Training add button-----------------------------------/////
const addTraining = document.querySelector('#train-add');
addTraining.addEventListener('click',()=>{
    console.log("Training Add Button Clicked");


const trainRow = document.querySelector('#train-row')
  const newTrainBox = document.createElement("div");
  newTrainBox.classList.add("mt-4", "border", "col-md-6",'py-4');;

  const trainTitle = document.createElement("div");
  trainTitle.className = 'mb-3';
  const trainTitleLabel = document.createElement("label")
  trainTitleLabel.className = 'form-label'
  trainTitleLabel.innerText = 'Training title'
  const trainTitleInput = document.createElement("input")
  trainTitleInput.setAttribute('type', 'text')
  trainTitleInput.className = 'form-control'
  trainTitleInput.id = 'trainTitleInput'
  trainTitleInput.setAttribute('placeholder', 'New Training Title')
  trainTitle.appendChild(trainTitleLabel)
  trainTitle.appendChild(trainTitleInput)
  newTrainBox.appendChild(trainTitle)
//   console.log(newTrainBox);


  const trainOrg = document.createElement("div");
  trainOrg.className = 'mb-3';
  const trainOrgLabel = document.createElement("label")
  trainOrgLabel.className = 'form-label'
  trainOrgLabel.innerText = 'Organization Name'
  const trainOrgInput = document.createElement("input")
  trainOrgInput.setAttribute('type', 'text')
  trainOrgInput.className = 'form-control'
  trainOrgInput.id = 'trainOrgInput'
  trainOrgInput.setAttribute('placeholder', 'New Organization Name')
  trainOrg.appendChild(trainOrgLabel)
  trainOrg.appendChild(trainOrgInput)
  newTrainBox.appendChild(trainOrg)

  const trainLoc = document.createElement("div");
  trainOrg.className = 'mb-3';
  const trainLocLabel = document.createElement("label")
  trainLocLabel.className = 'form-label'
  trainLocLabel.innerText = 'Training Location'
  const trainLocInput = document.createElement("input")
  trainLocInput.setAttribute('type', 'text')
  trainLocInput.className = 'form-control'
  trainLocInput.id = 'trainLocInput'
  trainLocInput.setAttribute('placeholder', 'Dharan-1, Nepal')
  trainLoc.appendChild(trainLocLabel)
  trainLoc.appendChild(trainLocInput)
  newTrainBox.appendChild(trainLoc)

  const trainDes = document.createElement("div");
  trainDes.className = 'mb-3';
  const trainDesLabel = document.createElement("label")
  trainLocLabel.className = 'form-label'
  trainLocLabel.innerText = 'Short Description'
  const trainDesInput = document.createElement("textarea")
  trainDesInput.setAttribute('rows', '6')
  trainDesInput.className = 'form-control'
  trainDesInput.id = 'trainDesInput'
  trainDesInput.setAttribute('placeholder', 'Write a short desciption about the training')
  trainDes.appendChild(trainDesLabel)
  trainDes.appendChild(trainDesInput)
  newTrainBox.appendChild(trainDes)

  console.log(newTrainBox);
  trainRow.appendChild(newTrainBox)
})

// This is for Soft Skills---------------------------------------
const addSoft = document.querySelector('#addSoft');
addSoft.addEventListener('click',()=>{
  console.log("Soft skill add button clicked");
  const softCol = document.querySelector('#soft-col');
  const newSoft = document.createElement('input');
  newSoft.setAttribute('type','text');
  newSoft.className = 'form-control';
  newSoft.classList.add('mt-3');
  newSoft.id = 'i-soft'
  newSoft.setAttribute('placeholder','New Soft Skill')
  softCol.appendChild(newSoft)
  console.log(newSoft);
})
//First Namae
const iFname = document.querySelector('#i-fname');
const cFname = document.querySelector('#c-fname')
iFname.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cFname.textContent = x;
  console.log(x);
})
// Last Name
const iLname = document.querySelector('#i-lname');
const cLname = document.querySelector('#c-lname')
iLname.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cLname.textContent = x;
  console.log(x);
})
//Address
const iAddress = document.querySelector('#i-address')
const cAddress = document.querySelector('#c-address')
iAddress.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cAddress.textContent = x;
})
//Contact
const iContact = document.querySelector('#i-contact')
const cContact = document.querySelector('#c-contact')
iContact.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cContact.textContent = x;
})
// Mail
const iMail = document.querySelector('#i-mail')
const cMail = document.querySelector('#c-mail')
iMail.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cMail.textContent = x;
})

// Short Description
const iAbout = document.querySelector('#i-about')
const cAbout = document.querySelector('#c-about')
iAbout.addEventListener('change',(e)=>{
  e.preventDefault();
  var x = e.target.value;
  cAbout.textContent = x;
})

// Language
const gen = document.querySelector('#gen')
gen.addEventListener('click',(e)=>{
  // e.preventDefault();
  // For Language
  const iLang = document.querySelectorAll('#i-lang')
  console.log(iLang);

  iLang.forEach((el)=>{
    const langText = el.value;
    // console.log(textContent);
    const cLang = document.querySelector('#c-lang');
    const newList = document.createElement('li');
    newList.textContent = langText
    cLang.appendChild(newList);
  })

  // Expertise
  const iExp = document.querySelectorAll('#i-exp')
  // console.log(iExp);

  iExp.forEach((el)=>{
    const expText = el.value;
    // console.log(textContent);
    const cExp = document.querySelector('#c-exp');
    const newList = document.createElement('li');
    newList.textContent = expText
    cExp.appendChild(newList);
  })

  // Training
   const iTrainTitle = document.querySelectorAll('#i-train-title');
   console.log(iTrainTitle);
   const iTrainOrg = document.querySelectorAll('#i-train-org')
   console.log(iTrainOrg);
   const iTrainLoc = document.querySelectorAll('#i-train-loc')
   console.log(iTrainLoc);
   const iTrainDes = document.querySelectorAll('#i-train-des')
   console.log(iTrainDes);
   for(var i = 0 ; i < 3 ; i++){
    const cTrain = document.querySelector('#c-train');
    const getDiv = document.createElement('div');
    const first = document.createElement('h5');
    const second = document.createElement('h5');
    const third = document.createElement('h5');
    const para = document.createElement('p');
    first.textContent = iTrainTitle[i].value;
    second.textContent = iTrainOrg[i].value;
    third.textContent = iTrainLoc[i].value;
    para.textContent = iTrainDes[i].value;
    getDiv.appendChild(first);
    getDiv.appendChild(second);
    getDiv.appendChild(third);
    getDiv.appendChild(para);
    cTrain.appendChild(getDiv);
   }

  //  For Educational Ititution
   const iEdName = document.querySelectorAll('#i-ed-name');
   const iEdDeg = document.querySelectorAll('#i-ed-deg')
   const iEdDate = document.querySelectorAll('#i-ed-date')
   for(var i = 0 ; i < 3 ; i++){
    const cEd = document.querySelector('#c-ed')
    const edDiv = document.createElement('div')
    const ed1 = document.createElement('h5');
    const edp1 = document.createElement('p');
    const edp2 = document.createElement('p');
    ed1.textContent = iEdName[i].value;
    edp1.textContent = iEdDeg[i].value;
    edp2.textContent = iEdDate[i].value;
    edDiv.appendChild(ed1);
    edDiv.appendChild(edp1);
    edDiv.appendChild(edp2);
    cEd.appendChild(edDiv);
   }

   const iSoft = document.querySelectorAll('#i-soft')
  // console.log(iExp);

  iSoft.forEach((el)=>{
    const newTxt = el.value;
    // console.log(textContent);
    const cSoft = document.querySelector('#c-soft');
    const newSoft = document.createElement('li');
    newSoft.textContent = newTxt
    cSoft.appendChild(newSoft);
  })
  // const getBox = document.querySelector('#box')
  // getBox.style.display = 'block'
})

function displayImage() {
  const imageInput = document.getElementById('imageInput');
  const uploadedImage = document.getElementById('uploadedImage');

  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.style.width = '100%';
      uploadedImage.style.height = '100%';
    };

    reader.readAsDataURL(file);
  } else {
    uploadedImage.src = '';
  }
}

