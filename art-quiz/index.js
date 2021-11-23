"use strict";alert("Добрый день! Работу доделать не успел из-за неожиданных жизненных обстоятельств. Прошу проверить в четверг вечером, если это возможно или написать мне в discord(Антон92#7138) на какое время вы можете отложить проверку. Если можете проверить только сейчас, то жмите 'OK' и проверьте то что есть на данный момент. Заранее спасибо!");import"./styles/style.scss";import{Home}from"./pages/Home/index.js";import{Categories}from"./pages/Categories/index.js";import{CategoriesP}from"./pages/CategoriesP/index.js";import{Settings}from"./pages/Settings/index.js";import{Questions}from"./pages/Questions/index.js";import{QuestionsP}from"./pages/QuestionsP/index.js";import{Error404}from"./pages/Error404/index.js";import{Utils}from"./utils/Utils.js";const homeInstance=new Home,settingsSettings=new Settings,categoriesAInstance=new Categories,categoriesPInstance=new CategoriesP,questionsInstance=new Questions,questionsPInstance=new QuestionsP,error404Instance=new Error404,portrait=[],landscape=[],stillLife=[],impressionism=[],expressionism=[],avantGarde=[],renaissance=[],surrealism=[],kitsch=[],minimalism=[],interior=[],nude=[],portraitP=[],landscapeP=[],stillLifeP=[],impressionismP=[],expressionismP=[],avantGardeP=[],renaissanceP=[],surrealismP=[],kitschP=[],minimalismP=[],interiorP=[],nudeP=[];let currentArr,currentArrStr,trueAns,volumeValue=50,muted=!1,time=20,n=0,numberOfTrueAnswers=0,timerOption=!0,pictureQuiz=!1;function playTrueSound(){const e=new Audio;e.src="./assets/sound/true.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function playFallseSound(){const e=new Audio;e.src="./assets/sound/false.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function playResultSound(){const e=new Audio;e.src="./assets/sound/result.mp3",e.volume=volumeValue/100,e.muted=!!muted,e.play()}function startTimer(e){const t=document.querySelector(".fixed-overlay-falls"),r=document.querySelector(".time-line"),s=document.querySelectorAll(".answer-option"),i=document.querySelectorAll(".questions-nav-buttons"),a=document.querySelector(".answer"),u=document.querySelectorAll(".true-painting-conteiner"),o=document.querySelectorAll(".true-author"),c=document.querySelectorAll(".true-year"),l=document.querySelectorAll(".true-name");let m=e,d=setInterval((function(){r.textContent=m,m--,m<0&&(t.classList.add("fixed-overlay-active"),a.classList.remove("answer-active"),playFallseSound(),o.forEach((e=>{e.textContent=currentArr[n].author})),c.forEach((e=>{e.textContent=currentArr[n].year})),l.forEach((e=>{e.textContent=currentArr[n].name})),u.forEach((e=>e.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`)),clearInterval(d))}),1e3);s.forEach((e=>e.addEventListener("click",(function(){clearInterval(d)})))),i.forEach((e=>e.addEventListener("click",(function(){clearInterval(d),n=0}))))}async function pushInArr(){const e=await fetch("data.json");(await e.json()).map((e=>{e.imageNum<10?portrait.push(e):e.imageNum>=10&&e.imageNum<20?landscape.push(e):e.imageNum>=20&&e.imageNum<30?stillLife.push(e):e.imageNum>=30&&e.imageNum<40?impressionism.push(e):e.imageNum>=40&&e.imageNum<50?expressionism.push(e):e.imageNum>=50&&e.imageNum<60?avantGarde.push(e):e.imageNum>=60&&e.imageNum<70?renaissance.push(e):e.imageNum>=70&&e.imageNum<80?surrealism.push(e):e.imageNum>=80&&e.imageNum<90?kitsch.push(e):e.imageNum>=90&&e.imageNum<100?minimalism.push(e):e.imageNum>=100&&e.imageNum<110?interior.push(e):e.imageNum>=110&&e.imageNum<120?nude.push(e):e.imageNum>=120&&e.imageNum<130?portraitP.push(e):e.imageNum>=130&&e.imageNum<140?landscapeP.push(e):e.imageNum>=140&&e.imageNum<150?stillLifeP.push(e):e.imageNum>=150&&e.imageNum<160?impressionismP.push(e):e.imageNum>=160&&e.imageNum<170?expressionismP.push(e):e.imageNum>=170&&e.imageNum<180?avantGardeP.push(e):e.imageNum>=180&&e.imageNum<190?renaissanceP.push(e):e.imageNum>=190&&e.imageNum<200?surrealismP.push(e):e.imageNum>=200&&e.imageNum<210?kitschP.push(e):e.imageNum>=210&&e.imageNum<220?minimalismP.push(e):e.imageNum>=220&&e.imageNum<230?interiorP.push(e):nudeP.push(e)}))}const routes={"/":homeInstance,"/settings":settingsSettings,"/categories_artist":categoriesAInstance,"/categories_pictures":categoriesPInstance,"/questions":questionsInstance,"/questions_pictures":questionsPInstance},router=async()=>{const e=document.getElementById("page_container"),t=Utils.parseRequestURL(),r=(t.resource?`/${t.resource}`:"/")+(t.id?"/:id":"")+(t.verb?`/${t.verb}`:""),s=routes[r]?routes[r]:error404Instance;if(e.innerHTML=await s.render(),await s.after_render(),await pushInArr(),s===questionsInstance||s===questionsPInstance){const e=document.querySelectorAll(".answer-option"),t=document.querySelectorAll(".continue"),r=document.querySelector(".answer");console.log(pictureQuiz),questionsInstance.wrap(currentArr,n,pictureQuiz),timerOption&&startTimer(time),r.classList.add("answer-active"),e.forEach((e=>e.addEventListener("click",(e=>{const t=document.querySelector(".fixed-overlay-true"),s=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),a=document.querySelectorAll(".true-author"),u=document.querySelectorAll(".true-year"),o=document.querySelectorAll(".true-name");trueAns=currentArr[n].author,r.classList.remove("answer-active"),pictureQuiz?(trueAns=currentArr[n].imageNum,console.log(e.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`),e.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`?(t.classList.add("fixed-overlay-active"),playTrueSound(),numberOfTrueAnswers++,console.log(numberOfTrueAnswers)):e.target.style.backgroundImage!=`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`&&(s.classList.add("fixed-overlay-active"),playFallseSound())):e.target.textContent==trueAns?(t.classList.add("fixed-overlay-active"),playTrueSound(),numberOfTrueAnswers++,console.log(numberOfTrueAnswers)):e.target.textContent!=trueAns&&(s.classList.add("fixed-overlay-active"),playFallseSound()),a.forEach((e=>{e.textContent=currentArr[n].author})),u.forEach((e=>{e.textContent=currentArr[n].year})),o.forEach((e=>{e.textContent=currentArr[n].name})),i.forEach((e=>e.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`))})))),t.forEach((e=>e.addEventListener("click",(function(){const e=document.querySelector(".fixed-overlay-true"),t=document.querySelector(".fixed-overlay-falls"),s=document.querySelector(".fixed-overlay-result"),i=document.querySelector(".test");9!=n?(n++,e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),r.classList.add("answer-active"),console.log(pictureQuiz),questionsInstance.wrap(currentArr,n,pictureQuiz),timerOption&&startTimer(time)):(e.classList.remove("fixed-overlay-active"),t.classList.remove("fixed-overlay-active"),s.classList.add("fixed-overlay-active"),n=0,playResultSound(),i.textContent=`Result: ${numberOfTrueAnswers}/10`)}))))}else if(s===categoriesAInstance){const e=document.querySelectorAll(".categori-card"),t=document.querySelector(".picture-link");e.forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("portrait")?(currentArr=portrait,pictureQuiz=!1):e.target.classList.contains("landscape")?(currentArr=landscape,pictureQuiz=!1):e.target.classList.contains("stillLife")?(currentArr=stillLife,pictureQuiz=!1):e.target.classList.contains("impressionism")?(currentArr=impressionism,pictureQuiz=!1):e.target.classList.contains("expressionism")?(currentArr=expressionism,pictureQuiz=!1):e.target.classList.contains("avantGarde")?(currentArr=avantGarde,pictureQuiz=!1):e.target.classList.contains("renaissance")?(currentArr=renaissance,pictureQuiz=!1):e.target.classList.contains("surrealism")?(currentArr=surrealism,pictureQuiz=!1):e.target.classList.contains("kitsch")?(currentArr=kitsch,pictureQuiz=!1):e.target.classList.contains("minimalism")?(currentArr=minimalism,pictureQuiz=!1):e.target.classList.contains("interior")?(currentArr=interior,pictureQuiz=!1):e.target.classList.contains("nude")&&(currentArr=nude,pictureQuiz=!1),numberOfTrueAnswers=0})))),t.addEventListener("click",(function(){pictureQuiz=!0})),console.log(pictureQuiz)}else if(s===categoriesPInstance){const e=document.querySelectorAll(".categori-card"),t=document.querySelector(".artist-link");e.forEach((e=>e.addEventListener("click",(e=>{e.target.classList.contains("portraitP")?(currentArr=portraitP,pictureQuiz=!0):e.target.classList.contains("landscapeP")?(currentArr=landscapeP,pictureQuiz=!0):e.target.classList.contains("stillLifeP")?(currentArr=stillLifeP,pictureQuiz=!0):e.target.classList.contains("impressionismP")?(currentArr=impressionismP,pictureQuiz=!0):e.target.classList.contains("expressionismP")?(currentArr=expressionismP,pictureQuiz=!0):e.target.classList.contains("avantGardeP")?(currentArr=avantGardeP,pictureQuiz=!0):e.target.classList.contains("renaissanceP")?(currentArr=renaissanceP,pictureQuiz=!0):e.target.classList.contains("surrealismP")?(currentArr=surrealismP,pictureQuiz=!0):e.target.classList.contains("kitschP")?(currentArr=kitschP,pictureQuiz=!0):e.target.classList.contains("minimalismP")?(currentArr=minimalismP,currentArrStr="minimalismP"):e.target.classList.contains("interiorP")?(currentArr=interiorP,pictureQuiz=!0):e.target.classList.contains("nudeP")&&(currentArr=nudeP,pictureQuiz=!0),numberOfTrueAnswers=0})))),console.log(pictureQuiz),t.addEventListener("click",(function(){pictureQuiz=!1,console.log("artistLink")})),console.log(pictureQuiz)}else if(s===settingsSettings){const e=document.querySelector(".slider"),t=document.querySelector(".mute"),r=document.querySelector(".toggle-button"),s=document.querySelector(".plus"),i=document.querySelector(".time-input"),n=document.querySelector(".minus"),a=document.querySelectorAll(".settings-nav-buttons");function u(){muted?(muted=!1,t.classList.toggle("mute-off")):(muted=!0,t.classList.toggle("mute-off")),console.log(muted)}i.value=time,r.checked=timerOption,muted?t.classList.remove("mute-off"):t.classList.add("mute-off"),t.addEventListener("click",u),e.value=volumeValue,e.addEventListener("input",(e=>{volumeValue=e.target.value})),e.addEventListener("mouseup",playTrueSound),r.addEventListener("click",(function(){timerOption=r.checked})),s.addEventListener("click",(function(){30==i.value?i.value=30:i.value=+i.value+5,time=i.value})),n.addEventListener("click",(function(){5==i.value?i.value=5:i.value=+i.value-5,time=i.value})),a.forEach((e=>e.addEventListener("click",(function(){history.back()}))))}else if(s===homeInstance){const e=document.querySelector(".pictures"),t=document.querySelector(".artist");e.addEventListener("click",(function(){pictureQuiz=!0})),t.addEventListener("click",(function(){pictureQuiz=!1}))}};function setLocalStorage(){localStorage.setItem("currentArr",JSON.stringify(currentArr)),localStorage.setItem("volumeValue",volumeValue),localStorage.setItem("muted",muted),localStorage.setItem("time",time),localStorage.setItem("timerOption",timerOption),localStorage.setItem("pictureQuiz",pictureQuiz)}function getLocalStorage(){currentArr=JSON.parse(localStorage.getItem("currentArr")),volumeValue=localStorage.getItem("volumeValue"),time=localStorage.getItem("time"),muted=JSON.parse(localStorage.getItem("muted")),timerOption=JSON.parse(localStorage.getItem("timerOption")),pictureQuiz=JSON.parse(localStorage.getItem("pictureQuiz"))}window.addEventListener("hashchange",router),window.addEventListener("load",router),window.addEventListener("beforeunload",setLocalStorage),window.addEventListener("load",getLocalStorage);