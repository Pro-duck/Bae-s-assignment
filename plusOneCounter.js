var plusOne = 0;
            function addonefunc() {
                plusOne = plusOne+ 1;
                document.getElementById("plusOne").innerHTML = plusOne;}; 
<!-- addonefunc() 함수를 정의. innerHTML 속성을 통해 HTML에 접근 후, plusOne과 일치하는 id 속성에 접근하여  plusOne = plusOne+ 1이 수행된 값을 돌려줌.  -->
       
            function resetfunc() {
                plusOne = 0;
            document.getElementById("plusOne").innerHTML = plusOne;};
<!-- resetfunc() 함수를 정의. innerHTML 속성을 통해 HTML에 접근 후, plusOne과 일치하는 id 속성에 접근하여  plusOne = 0이 수행된 값을 돌려줌.  -->
