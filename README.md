# Description
UAV 온디바이스 재난영역 검출 소프트웨어 front-end repository.\
Jetson Nano 보드에서 작동 중인 서버와 axios 통신하여 데이터를 받아옵니다.

## GUI
![MicrosoftTeams-image](https://github.com/rjsdn0124/GradProj/assets/44187187/3b44d2c6-2da3-4491-bf57-528b4dd329c6)
- 촬영된 이미지와 이를 processing한 이미지를 확인할 수 있습니다.
- 보드 내에 실행가능한 모듈 리스트를 확인할 수 있고 모듈을 변경할 수 있습니다.
- 간단한 하드웨어 상태 report를 볼 수 있습니다.

![MicrosoftTeams-image (2)](https://github.com/rjsdn0124/GradProj/assets/44187187/b601f574-20cb-4b02-a7f7-63d59121506b)
- 현재 하드웨어들(CPU,GPU,Memory 등)의 점유 상태를 확인할 수 있습니다.
- 하드웨어들의 온도를 확인할 수 있습니다.

## Dependency
 - React v. 18.2.0
 - React-Icons v. 4.8.0
 - react-circular-progressbar v. 2.1.0
 - axios v. 1.4.0


## How to install and run
### 프로젝트 시작하기 전 기본 설정하기.
  1. Install [Node.js](https://nodejs.org/ko)
  2. Powershell이나 bash에서 `npm -v`명령어로 npm이 설치되었는지 확인하기. 
  3. 설치가 되어 버전이 출력되면 `npm install -g yarn`명령어로 yarn 설치 후 `yarn --version` 명령어로 설치 확인.
  4. 굿
  
### 코드 실행하기.
  1. git 설치 확인.
  2. 원하는 폴더 경로로 이동해서 `git clone https://github.com/rjsdn0124/GradProj.git` 명령어 입력.
  3. Git clone이 잘 되어서 폴더가 생겼다면 `cd GradProj.` 명령어로 해당 폴더로 이동.
  4. 실행을 위한 패키지 설치를 위해 현재 폴더 위치에서 `yarn` 명령어 실행.
  5. 설치 확인후 `yarn start` 명령어 실행.
  6. 웹 브라우저로 이동해서 `http://localhost:3000`으로 이동
  7. 만약 빌드가 실행되지 않고 오류가 나거나 URL에 접속이 되지 않는다면 3000번 포트에서 실행중인 프로그램 찾아서 kill.
  8. 코드 실행 완료.
  
  
