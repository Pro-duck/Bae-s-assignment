var plusOne = 0; //plusOne이라는 변수를 선언하고 0으로 초기화.
    function addonefunc() { //함수 addonefunc()를 선언.
        plusOne = plusOne+ 1; //plusOne에 plusOne에 1이 더해진 값을 대입.
        document.getElementById("plusOne").innerHTML = plusOne;}; 
        /*해당 파일을 호출한 HTML 문서 내부에서 매개변수 plusOne과 같은 ID를 가진 태그를 호출 후, 
        해당 태그 안에 쓰여지는 HTML 형식의 값을 변수값으로 넣어준 것.*/
                                                                          
    function resetfunc() { // 함수 resetfunc()를 선언.
        plusOne = 0; //plusOne에 0을 대입.
        document.getElementById("plusOne").innerHTML = plusOne;}; 
        /*해당 파일을 호출한 HTML 문서 내부에서 매개변수 plusOne과 같은 ID를 가진 태그를 호출 후, 
        해당 태그 안에 쓰여지는 HTML 형식의 값을 변수값으로 넣어준 것.*/