import './App.css';
import { useState } from 'react';

function App(){

    
    

    let [DetailModal, setDetailModal] = useState(false);
    // let [Title, setTitle] = useState(['하계유니폼', '동절기정장', '만능체육복']);
    let [Title, setTitle] = useState(['하계', '동절기정장', '만능체육복']);
    let [SelectTitleIndex, setSelectTitleIndex] = useState(0);
    let [Like, setLike] = useState(0);
    let [입력값, 입력값변경] = useState('');

    // const numbers = [1, 2, 3, 4, 5];
    // const result = numbers.filter(number => number > 3);
    // console.log(numbers);
    // // [1, 2, 3, 4, 5];
    // console.log(result);
    // // [4, 5]
    // console.log(Title);
    // const resul2 = Title.filter(number => number !== '하계');
    // console.log(resul2);


    const onDelete = delName => {
        Title = Title.filter(str => str !== delName);
        setTitle(Title);
    };
    
    return (
        <div className="App">
            <div className="black-nav">
                <h4>
                    ReactBlog
                </h4>
            </div>

            {/* <div className="list">
                <h4 onClick={() => { setDetailModal(true); setSelectTitleIndex(0); }}>{Title[0]}</h4>
                <p>8월2일</p>
            </div>
            <div className="list">
                <h4 onClick={() => { setDetailModal(true); setSelectTitleIndex(1); }}>{Title[1]}</h4>
                <p>8월2일</p>
            </div>
            <div className="list">
                <h4 onClick={() => { setDetailModal(true); setSelectTitleIndex(2); }}>{Title[2]}</h4>
                <p>8월2일</p>
            <p></div> */}

            {
                Title.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => { setDetailModal(true); setSelectTitleIndex(i); }}>{Title[i]} 
                                <span onClick={ (e)=>{ setLike(Like+1) }}>👍</span> {Like} 
                                <button onClick={(e) => { onDelete(Title[i]) }}> 삭제 </button>
                                {/* e.stopPropagation():이벤트버블링 중지 */}
                            </h4>
                            <p>8월2일</p>
                        </div>
                    );
                })
            }
            
            <input type="text" onChange={(e) => { 입력값변경(e.target.value); console.log({입력값}); }}/>
            {/* <button onClick={() => { Title.push(입력값); setTitle(Title); }}> 등록 </button> */}
            <button onClick={() => { setTitle([...Title, 입력값]) }}> 등록 </button>
            {
                DetailModal ? <DetailProductDesc Title={Title} SelectTitleIndex={SelectTitleIndex} Color={'grey'} /> : null
            }

        </div>
    );
}

function DetailProductDesc(props){
    return (
        // <div className='modal' style={{backgroundColor:blue}}>
        <div className='modal' style={{ backgroundColor:props.Color }}>
            <h4>{props.Title[props.SelectTitleIndex]}</h4>
        </div>
    );
}
export default App;