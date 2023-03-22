import React from 'react'
import { useState, useEffect } from 'react'
import SurveyModal from '../../components/surveyModal/SurveyModal'
import Point from '../../components/surveyRadioPoint/Point'

export interface SurveyData {
  number1?: number
  number2?: number
  number3?: number
  number4?: number
  number5?: number
  number6?: number
  number7?: number
  number8?: number
  number9?: number
  number10?: number
}

function Survey() {
  const [survey, setSurvey] = useState<SurveyData>({
    number1: undefined,
    number2: undefined,
    number3: undefined,
    number4: undefined,
    number5: undefined,
    number6: undefined,
    number7: undefined,
    number8: undefined,
    number9: undefined,
    number10: undefined,
  })
  const [modalState, setModalState] = useState<boolean>(false)
  const [status1, setStatus1] = useState<number>(0)
  const [status2, setStatus2] = useState<number>(0)
  const onClickModalOpenHandler = () => {
    if (0 <= status1 && 0 <= status2) {
      setModalState(!modalState)
    } else {
      alert('설문을 모두 선택해주세요!')
    }
  }

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      if (Object.values(survey)[i] !== undefined) {
        console.log(Object.values(survey)[i])
        console.log("되니?");
        
        if (i % 2 === 0 || i === 0) {
          console.log(Object.values(survey)[i])
          setStatus1((prev) => prev + Object.values(survey)[i])
        } else {
          setStatus2((prev) => prev + Object.values(survey)[i])
        }
      }
    }
  }, [survey])

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  console.log(survey)
  console.log(status1, status2)

  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <h1>질문 1</h1>
            <span>오늘 얼마나 행복했었나요?</span>
            <Point number={Object.keys(survey)[0]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 2</h1>
            <span>오늘 하루 한숨을 열 번이상 쉬셨나요?</span>
            <Point number={Object.keys(survey)[1]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 3</h1>
            <span>지금 좋은 생각을 하고있나요?</span>
            <Point number={Object.keys(survey)[2]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 4</h1>
            <span>오늘 하루 눈물을 흘린 적이 있나요?</span>
            <Point number={Object.keys(survey)[3]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 5</h1>
            <span>보람찬 하루를 보냈나요?</span>
            <Point number={Object.keys(survey)[4]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 6</h1>
            <span>혹시 마음의 여유가 필요하신가요?</span>
            <Point number={Object.keys(survey)[5]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 7</h1>
            <span>Shall We Dance?</span>
            <Point number={Object.keys(survey)[6]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 8</h1>
            <span>질문 8</span>
            <Point number={Object.keys(survey)[7]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 9</h1>
            <span>질문 9</span>
            <Point number={Object.keys(survey)[8]} setSurvey={setSurvey} />
          </div>
          <div>
            <h1>질문 10</h1>
            <span>질문 10</span>
            <Point number={Object.keys(survey)[9]} setSurvey={setSurvey} />
          </div>
          <button onClick={onClickModalOpenHandler}>완료</button>
        </form>
      </div>
      {modalState === true ? (
        <SurveyModal
          modalState={modalState}
          setModalState={setModalState}
          status1={status1}
          status2={status2}
        />
      ) : null}
    </>
  )
}

export default Survey
