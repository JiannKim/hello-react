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
