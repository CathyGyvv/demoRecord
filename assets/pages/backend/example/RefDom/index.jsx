import React, { useEffect } from 'react';

// 不能在函数组件上使用ref属性，因为它们没有实例
// 但是可以在函数组件内部使用ref属性
const CustomTextInput = () => {
  const textInput = React.createRef();
  const focusTextInput = () => {
    textInput.current.focus();
  };
  return (
    <div>
      <input type="text" ref={textInput}></input>
      <input type="button" value="focus on text input" onClick={focusTextInput}></input>
    </div>
  );
};
export default CustomTextInput;
