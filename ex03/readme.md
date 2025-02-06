## 03. Module Programming: common.js(require)

#### 01
1. math.js : module.exports 바로 사용 (추천 x)
2. index.js : math module 사용

#### 02
1. math.js : exports 사용 (추천 o)
2. index.js : math module 사용

#### 03
1. common.js(require) 오용


## [참고] 자바스크립트 모듈
모듈은 쉽게 말해 재사용 가능한 코드(함수, 클래스, 객체, 상수, 변수 등)들을 모아 놓은 자바스크립트 파일(.js) 또는 그 파일들을 모아 놓은 디렉토리를 가리킨다. 자바스크립트가 인기를 끌면서 유일 호스트 환경인 웹브라우저에서 뿐만 아니라 다양한 OS 환경의 서버사이드 환경에서도 사용 하려는 노력이 있었다. 자바스크립트가 브라우저 밖으로 나와 범용 애플리케이션 개발에 사용되기 위해서는 필수 선결 조건이 코드를 분리하여 관리하고 재사용할 수 있는 모듈 시스템을 언어 자체적으로 지원해야 했다.
 
ECMAScript6부터 자바스크립트도 공식 모듈 시스템을 지원한다. 하지만 그 전까지는 CommonJS와 AMD라는 2개의 외부 프로젝트가 자바스크립트 모듈 지원을 위한 표준과 같은 역할을 했었다. 이 두 프로젝트가 자바스크립트 애플리케이션, 라이브러리 그리고 프레임워크 등 모듈이 필요한 복잡한 개발에 큰 도움을 주었고 ECMAScript6 표준 모듈 지원 스펙에도 영향을 주었다.        


#### CommonJS
[CommonJS](http://www.commonjs.org/)는 최초의 JavaScript 모듈화 프로젝트다. CommonJS에는 모듈 명세 뿐만 아니라 다양한 API 규격으로 구성되어 있었다. 그 중에서 유명하고 인기가 많은 것이 자바스크립트 모듈 명세이다. ECMAScript6 이전에는 자바스크립트 자체적으로 모듈이 없었기 때문에 CommonJS의 모듈 스펙은 상당한 파급력을 가졌다.
 
처음에는 ServerJS 라는 이름으로 시작하였는데 이름에서 보여지듯 서버사이드 스크립트의 모듈화에 집중하였다. 이후에 자바스크립트를 범용(Common)으로 쓰자는 취지로 이름을 CommonJS로 바꾸었다. 자바스크립트 공식 모듈 명세가 나오기 전까지 실질적인 표준 역할을 했다. 많은 프로젝트, 로더, 프레임워크들이 CommonJS 모듈 명세에 따라 모듈을 만들거나 모듈 로드 시스템을 만들었다. CommonJS를 기반하고 있는 프로젝트들이 반드시 CommonJS를 서버사이드에 활용해야 하는 것은 아니다. 하지만, CommonJS를 이용한 주요한 플랫폼으로 Node.js가 있듯이 모듈화 명세 작업의 중점이 서버사이드 였고 간결함을 장점으로 서버사이드에서 많이 활용되었다. 대표적인 구현체들은 다음과 같다.

1. [SpoutCore](https://sproutcore.com/): 웹브라우저 로더
2. [PINF JavaScript Loader](https://github.com/pinf/loader-js): 웹브라우저 로더
3. [Narwhal](https://github.com/tlrobinson/narwhal): Javascipt 클라이언트 애플리케이션 개발 플랫폼
4. [Node.js](http://nodejs.org): 서버사이드 네트워크 애플리케이션 개발 플랫폼


#### AMD(Asynchronous Module Definition)
[AMD](https://github.com/amdjs)는 비동기 상황에서의 모듈 사용을 더 중점으로 한 CommonJS에서 빠져 나온 프로젝트이다. 비동기 상황은 네트워크상에서 여러 모듈을 다운로드 하는 상황으로 웹브라우저에서 여러 모듈을 다운로드 하는 것에 더 중점을 두었던 프로젝트라 이해하면 된다. CommonJS가 브라우저 밖의 특히 서버사이드에서 JavaScript 모듈화에 중점을 두었기 때문에 AMD가 빠져나와 독립 프로젝트가 될 수 밖에 없었다.
 
 AMD가 서버사이드 플랫폼에 활용되지 않는 것은 아니지만 주요 구현체는 웹브라우저의 로더들이다. 필요한 파일을 네트워크를 통해 내려받아야 하는 웹브라우저에서는 AMD가 더 유연한 방법을 제공한다. 대표적인 구현체는 다음과 같다.
 
1. [RequireJS](http://requirejs.org/): 웹브라우저 로더
2. [bdLoad](http://bdframework.org/bdLoad/): 웹브라우저 로더
3. [Yabble](http://github.com/jbrantly/yabble): 웹브라우저 로더


#### ECMAScript 2015(ES6)
ECMAScript2015 표준 명세에는 그 동안 빠져 있던 JavaScript 모듈 표준 명세가 추가 되었다. 서버사이드 모듈화 기능을 CommonJS에 의존하던 Node.js도 CommonJS 대신에 ECMAScript2015로 대체하였다. ECMAScript2015의 모듈 명세는 서버사이드뿐만 아니라 웹브라우저에서 지원해야 하는 비동기 모듈 로딩도 지원한다. 따라서 웹브라우저에서도 CommonJS나 AMD 기반의 별도의 로더가 필요없다. CommonJS와 AMD가 ECMAScript2015의 모듈 명세로 현재는 그 입지가 약해졌지만 ECMAScript2015 모듈 명세에 많은 기술적 영향과 아이디어를 제공하였다.