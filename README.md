## 영진전문대학교 29기 동아리 4팀 레포
# 다양한 프로젝트 진행으로 서로의 실력향상을 목표로 합니다.

# 컨벤션 문서

## Naminng
- 변수는 snake_case를 기본으로 한다.
- 기본적으로 이름은 길이를 고려하지 않고 최대한 의도를 밝혀 명확하게 작성한다. 다만 명확성의 차이가 없을 때는 길이가 짧은 네이밍을 선택한다.
- 변수명은 맥락을 고려해서 짓는다. 예를들어 클래스 이름이 user 라면 변수에 userName과 같이 user를 붙이지 않는다.
- 변수이름에 자료형을 쓰지 않는다. 예를들어 memberList 보다는 members 처럼 복수형으로 표현한다.
- 패키지명은 대문자를 사용하지 않고 소문자로만 구성한다.
- Enum 이나 상수는 대문자로 구성하고 밑줄( _ )로 각 단어를 분리한다.
- 메서드명은 동사로 작성한다.
- 값을 반환하는 메서드의 경우 뭘 반환하는지 알 수 있게 메서드명을 짓는다.
- 클래스명과 인터페이스명은 명사로 작성하고, Upper Camel Case 를 사용한다.
- 엔티티 이름은 단수로 작성한다.
- boolean 메서드의 경우에 문법적으로 맞지 않은데 많이 사용하는 is+동사원형의 형태는 쓰지 않는다.

## Structure
```
todo-team-project/ 
├── backend/ # Node.js 서버 
│ ├── node_modules/  #.gitignore로 git에 제외시킴
│ ├── src/             # 투두 관련 API 라우터를 분리 (임시)
│ │ ├── index.js       # Express 서버 진입점(entry point)
│ │ └── routes/        # 투두 관련 API 라우터를 분리 (임시)
│ │ │ └── todos.js     # 투두 관련 API 라우터를 분리 (임시)
│ ├── .gitignore        # Git에 올리지 않을 파일 목록
│ ├── package-lock.json # 프로젝트 이름, 버전, 의존성 정보를 관리
│ └── package.json      # 프로젝트 이름, 버전, 의존성 정보를 관리
├── frontend/ # React 앱 
│ ├── node_modules/  #.gitignore로 git에 제외시킴
│ ├── public/
│ │ ├── favicon.ico 
│ │ └── index.html
│ ├── src/ 
│ │ ├── App.css 
│ │ ├── App.js 
│ │ ├── index.css 
│ │ ├── index.js 
│ │ └── components/ 
│ │ │ └── TodoItem.js
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ └── README.md
├── .nvmrc
└── README.md 
```
ㄴ회의진행 , 개발진행으로 디렉구조 변경되고 파일내용 채워질예정

## Programming
- 반복되는 코드는 작성하지 않는다.
- 변수를 사용하는 위치에 가깝게 둔다.
- import를 할 때는 전체 이름을 다 적는다. * 를 사용하지 않는다.
## commit convention
gitmoji 설치 필수 npm i -g gitmoji-cli
gitmoji : commit message (#이슈번호)
본문
- commit message
  - 이번 커밋에서 작업한 내용을 간단하게 설명함
- issue number
  - 깃허브 이슈 넘버 혹은 지라 티켓 넘버를 작성함

### 본문
- 제목과 본문 사이 한 줄을 개행하여 분리한다.
- 본문은 필요한 경우에 작성하고, 무엇을 왜 했는지(what과 why)를 중점으로 작성한다.

## git branch strategy
- main
  - 언제든지 배포가 가능한 상태를 유지해야 한다.
    
- develop
  - 다음 버전 개발을 위한 코드를 모아두는 브랜치
  - 개발이 완료되면 main 브랜치로 머지된다.
    
- feature branch
  - 기능 단위 개발 브랜치
  - 이슈 리스트로 브랜치 생성 및 관리
  - 네이밍은 feature/(#이슈번호)-브랜치명 의 형태로 생성한다.
  - 브랜치명은 소문자로 작성한다. 단어의 구분은 밑줄( _ )로 한다.
  - feature 브랜치에서 개발 완료 후 develop 브랜치로 PR 요청한다.
  - merge 이후 요청한 브랜치는 삭제한다.

### Type
| 타입       | 설명                           |
| :------- | :--------------------------- |
| feat     | 새로운 기능 추가                    |
| fix      | 버그 수정                        |
| docs     | 문서 수정                        |
| style    | 공백, 세미콜론 등 스타일 수정            |
| refactor | 코드 리팩토링                      |
| perf     | 성능 개선                        |
| test     | 테스트 추가                       |
| chore    | 빌드 과정 또는 보조 기능(문서 생성기능 등) 수정 |

  ### git merge strategy
  - PR 요청 시에는 반드시 리뷰어를 지정한다.
  - 리뷰어는 최소 2명 이상 지정한다.
  - 방식은 Squash and Merge를 사용한다.
## template
> 템플릿의 목적은 자주 작성하는 이슈와 PR 요청의 시간을 줄이기 위함

### issue
> 이슈 발생 원인 및 설명과 요청할 작업 및 진행도 체크(가능하면)

#### 예시
Title : 오늘 점심 및 저녁 메뉴 추천

- 먹긴 해야하는데 뭘 먹어야 할 지 모르겠음

- 선택장애라 도움이 필요함

- [ ] 점심 메뉴 확인
- [ ] 저녁 메뉴 확인
## pull request
- 작업 목적
- 주요 변경점
- 참고
- 리뷰 포인트
