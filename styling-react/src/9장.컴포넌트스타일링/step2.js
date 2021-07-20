// 9.2 Sass

// CRA(create-react-app) 구버전에서는 Sass를 사용하기위해 별도의 추가 작업이 필요했는데, v2 버전부터는 별도 설정없이 바로 사용할 수 있다.
/** 
 * Sass의 두가지 확장자 .scss 와 .sass
 * 
 * 1. sass
 * -------------------------------------------
 * |  $font-stack: Helvetica, sans-serif     |
 * |  $primary-color: #333                   |
 * |                                         |
 * |  body                                   |
 * |    font: 100% $font-stack               |
 * |    color: $primary-color                |
 * |                                         |
 * |  2. scss                                |
 * |  $font-stack: Helvetica, sans-serif;    |
 * |  $primary-color: #333;                  |
 * |                                         |
 * |  body {                                 |
 * |    font: 100% $font-stack;              |
 * |    color: $primary-color;               |
 * |  }                                      |
 * -------------------------------------------
 *
 * 주요 차이점을 보면 sass는 중괄호({})와 세미콜론(;)을 사용하지 않는다.
 * 반면 scss는 CSS처럼 중괄호와 세미콜론을 사용한다. 사실 CSS와 문법적인 차이는 크지 않다.
 * 보통 scss 문법이 더 자주 사용된다.
 * 
 * 이제 node-sass라는 라이브러리를 설치해 보자. 이 라이브러리는 Sass를 CSS로 변환해준다. 
 * 프로젝트 디렉터리에서 `yarn add node-sass` 를 입력해 모듈을 받고, src 디렉터리에 SassComponent.scss 파일을 작성하자
 */

// 9.2.1 utils 함수 분리하기
// 여러 파일에서 사용될 수 있는 Sass 변수 및 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 쉽게 불러와 사용할 수 있다.
// src -> Create 'styles' folder -> utils.scss file을 만들어 기존 SassComponent.scss에 작성한 변수와 믹스인을 잘라내서 이동시키자

// 9.2.2 sass-loader 설정 커스터마이징하기
/**
 * 이 작업은 Sass를 사용할 때 반드시 해야하는것은 아니지만, 해 두면 유용하다.
 * 예를 들어 SassComponent.scss에서 utils.scss를 불러올 때 @import 구문을 사용해 불러왔었다.
 * 만약 프로젝트에 디렉터리가 많아져 구조가 깊어졌다면 폴더를 타고타고 (예: src/components/util/styles/...)
 * 해당 파일에서는 다음과 같이 상위 폴더로 한참 거슬러 올라가야 하는 단점이 생긴다.(예: ../../../styles/utils)
 * 
 * 이 문제점은 웹팩에서 Sass를 처리하는 sass-loader의 설정을 커스터마이징하여 해결할 수 있다.
 * c-r-a로 만든 프로젝트는 프로젝트 구조의 복잡도를 낮추기 위해 세부 설정이 모두 숨겨져 있기 때문에
 * 이를 커스터마이징 하기 위해선 프로젝트 디렉터리에서 `yarn eject` 명령어를 통해 세부 설정 파일을 밖으로 꺼내줘야 한다.
 * 그 전에 commit 되지 않은 변화가 있다면 진행되지 않으니, commit을 미리 해주는게 좋다.
 * 
 * 명령어를 실행하면 프로젝트 디렉터리에 config라는 디렉터리가 생성되었을건데,
 * 그 안에 들어있는 webpack.config.js를 열어 "sassRegex" 라는 키워드를 찾아
 * use:에 있는 'sass-loader' 부분을 지우고, 뒷부분에 concat을 통해 커스터마이징된 sass-loader 설정을 넣으면 된다.
 * 
 */