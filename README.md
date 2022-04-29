# vanilla-web-tutorial

html과 node.js(express)로 구현된 초간단 서버

    이 프로젝트를 사용하여 html 페이지를 프론트에서 손쉽게 사용할 수 있습니다.

- Project 및 Readme 작성자 :  [Gabriel Ju Hyun Yoon, 윤주현](https://github.com/gabrielyoon7)

## 사용 가능한 명령어

프로젝트에서 사용이 가능한 대표적인 명령어는 다음과 같습니다.

모든 명령어는 Terminal에서 사용이 가능합니다.

> Terminal의 기본 조작 방법은 리눅스의 Terminal과 유사합니다.

    1. 터미널 접근
        cd (경로)
    2. 터미널 뒤로가기
        cd ..
    3. 터미널에서 실행 상태를 종료
        Ctrl + C
    4. 터미널 내용 복사하기
        마우스로 드래그 한 다음 Ctrl + C
    5. 복사한 텍스트를 터미널에 붙여넣기
        마우스 우클릭


### `npm start`
> **Note: 아래 `install 명령어`를 먼저 실행할 필요가 있을 수도 있습니다.**

이 프로그램을 실행하게 합니다.
실행에 성공하면 [http://localhost:8080](http://localhost:8080)으로 접속이 활성화 됩니다.

node index.js로도 접근할 수 있으며

nodemon이 설치되어 있는 경우 nodemon index.js로도 실행이 가능합니다.


### `npm install`

> **Note: 패키지 변화가 없으면 매번 작업을 할 필요가 없지만 최초 1회는 필수로 실행해주셔야 합니다.**

package.json에 있는 npm 설치 이력을 토대로 본인 컴퓨터에 패키지를 자동으로 설치합니다.
이 작업은 평소에 할 필요가 없지만, 누군가가 새 패키지를 설치하는 경우 다른 사람들이 모두 해줘야 합니다.

    부가 옵션으로 과거 버전의 패키지를 설치하는 방법이 있습니다.
    npm install --legacy-peer-deps
    패키지 설치 시 더이상 과거 버전을 지원하지 않는다거나 권장하지 않는다고 설치를 거부하는 경우 레거시 버전을 설치하는 방법입니다.

    만약 위 명령어로도 설치가 불가능하면
    npm install --force
    강제로 설치하는 명령어도 있습니다.


## 더 알아보기

이 프로젝트는 웹을 처음 배우는 사람이 간단하게 html 페이지를 등록하고 확인할 수 있는 초간단 서버입니다.

