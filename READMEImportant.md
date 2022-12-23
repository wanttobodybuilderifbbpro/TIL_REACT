## Important -Using by Sort Function

```let [제목들, 제목들변경] = useState([ '글제목2', '글제목1', '글제목3' ]);```

```<button onClick={  ()=>{```

```  let copy = [ ...제목들 ];```

```  copy.sort();```

```  제목들변경(copy);```

```}```

```}> 정렬버튼 </button>```


꼭 기억하세요 리액트에서 sort함수 쓰는 방법입니다!
