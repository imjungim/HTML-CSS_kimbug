 const dropdown = document.querySelector('.dropdown')
 console.log(dropdown);
 const toggleButton = document.querySelector('.dropdown-toggle');
 const menu = document.querySelector('.dropdown-menu');
 const options = document.querySelectorAll('.dropdown-option')
 const nextButton = document.querySelector('.next-button');


//토글버튼 클릭 => 메뉴를 보여준다.
//현재 메뉴는 max-hight : 0
//메뉴.show -> 해지
toggleButton.addEventListener('click', function() {
  menu.classList.toggle('show')
})

//focus가 사라지는 순간=> blur!!
toggleButton.addEventListener('blur', function() {
  menu.classList.remove('show')
})



options.forEach(function(item){
  item.addEventListener('click', function(e){
    const value = e.currentTarget.textContent.trim() //trim()공백을 없애줌.
    toggleButton.textContent = value;
    toggleButton.classList.add('selected');
    nextButton.removeAttribute('disabled');
    //클릭이 됐을때 show클래스를 없애던가 
    // menu.classList.remove('show') 이 방법은 바깥쪽을 누르면 안사라짐 아쉬워져
  })
})