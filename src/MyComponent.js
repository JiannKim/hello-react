import React from 'react';

// 3.2 첫 컴포 생성
// 3.2.3 모듈 내보내기 및 불러오기(export & import )
const MyComponent = () => {
  return <div>my new component</div>;
};
// 다른 파일에서 이 파일을 불러와 사용 할 수 있도록 설정한다.
export default MyComponent; // 3.2.3.1 내보내기(export)
