document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addTaskButton');
  const container = document.querySelector('.container');
  // 사이드바 상단(.sidebar-top)과 날짜 div(오늘 날짜가 있는 div) 선택
  const sidebarTop = document.querySelector('.sidebar-top');
  const dateDiv = container.children[1]; // 사이드바(1), 날짜 div(2번째 자식)

  let inDateArea = false;

  addBtn.addEventListener('click', () => {
    if (inDateArea) {
      // 원위치: .main 영역으로
      document.querySelector('.main').appendChild(addBtn);
    } else {
      // 날짜 div 바로 아래로 이동
      dateDiv.insertAdjacentElement('afterend', addBtn);
    }
    inDateArea = !inDateArea;
  });
});
