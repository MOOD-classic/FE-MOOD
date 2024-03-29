import { useNavigate } from 'react-router'
import {
  MoveRecommendPage,
  Wrap,
  FirstContainWrap,
  Condition,
  Explain,
  MoveBtn,
  Scroll,
  ComposerName,
  ComposerImg,
  ComposerNameKr,
  ComposerDesc,
  RepresentativeSong,
  Songs,
  SongsDiv,
  ComposerImgFile,
  ScrollBtn,
  Hr,
  StyledTitle,
  Border,
  SecondContain,
  Center,
} from './mainSt'
import chopin from '../../assets/composer/쇼팽.png'
import vivaldi from '../../assets/composer/비발디.png'
import beethoven from '../../assets/composer/베토밴.png'
import mozart from '../../assets/composer/모차르트.png'
import { HiArrowLongDown } from 'react-icons/hi2'
import ButtonData from './ButtonData'
import ScrollButton from './ScrollButton'
import React, { useEffect, useState } from 'react'
import { onGetLocalStorage } from '../../util/cookie'

const Main: React.FC = () => {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState('section1')

  const scrollToSection = (sectionId: string) => {
    setSelectedSection(sectionId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [sectionRefs, setSectionRefs] = useState(
    ButtonData.map(() => React.createRef<HTMLDivElement>())
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    )

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [sectionRefs])

  return (
    <Wrap>
      <FirstContainWrap id="section1" ref={sectionRefs[0]}>
        <StyledTitle>MOOD</StyledTitle>
        <Condition>오늘의 기분은 어떠신가요?</Condition>
        <Explain>
          우리의 기분이 매일 다르듯, 음악에도 다양한 감정이 담겨 있습니다.
          <br />
          MOOD는 여러분의 기분에 맞춰 클래식 음악을 추천해 드립니다.
        </Explain>
        {!onGetLocalStorage('accessToken') ? (
          <MoveBtn onClick={() => navigate('/login')}>로그인</MoveBtn>
        ) : <MoveBtn onClick={() => navigate('/recommend')}>음악 감상하러 가기</MoveBtn>}
        <Scroll>
          scroll &nbsp;
          <HiArrowLongDown />
        </Scroll>
      </FirstContainWrap>

      <SecondContain id="section2" ref={sectionRefs[1]}>
        <Center>
          <ComposerName>Frédéric Chopin</ComposerName>
          <ComposerImg>
            <ComposerImgFile src={chopin} />
          </ComposerImg>
          <ComposerNameKr>프레데리크 쇼팽 (1810-1849)</ComposerNameKr>
          <ComposerDesc>
            프레데리크 쇼팽은 낭만주의 시대의 대표적인 작곡가로 그의 모든 인생을
            피아노에 바쳤고, 피아니스트들은 그를 피아노의 절대신이라고
            생각합니다. 그는 그 어떤, 그 어느 작곡가보다도 훨씬 더 피아노와
            밀접하게 연관되어 있습니다.
          </ComposerDesc>
        </Center>
        <RepresentativeSong>
          <Hr />
          대표작
          <Hr />
        </RepresentativeSong>
        <Songs>
          <SongsDiv color="#4b372e">
            <p>녹턴</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>즉흥 환상곡</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>강아지 왈츠</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>뱃노래</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>환상곡</p>
          </SongsDiv>
        </Songs>
      </SecondContain>

      <SecondContain id="section3" ref={sectionRefs[2]}>
        <Center>
          <ComposerName>Antonio Vivaldi</ComposerName>
          <ComposerNameKr>안토니오 비발디 (1695-1741)</ComposerNameKr>
          <ComposerDesc>
            안토니오 비발디는 18세기 이탈리아의 바로크 시대 작곡가로 현악기를
            위한 혁신적인 연주법과 아름다운 멜로디로 인기를 얻었습니다. 그의
            대표작 중 하나인 ‘사계’, ‘조화의 영감’은 전 세계적으로 유명하며,
            현대 음악에서도 많이 인용되고 있습니다.
          </ComposerDesc>
          <ComposerImg>
            <ComposerImgFile src={vivaldi} />
          </ComposerImg>
        </Center>
        <RepresentativeSong>
          <Hr />
          대표작
          <Hr />
        </RepresentativeSong>
        <Songs>
          <SongsDiv color="#4b372e">
            <p>사계</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>조화의 영감</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>Gloria</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>첼로 협주곡</p>
          </SongsDiv>
          <SongsDiv color="#4b372e">
            <p>Magnificat</p>
          </SongsDiv>
        </Songs>
      </SecondContain>

      <SecondContain id="section4" ref={sectionRefs[3]}>
        <Center>
          <ComposerName>Ludwig van Beethoven</ComposerName>
          <ComposerImg>
            <ComposerImgFile src={beethoven} />
          </ComposerImg>
          <ComposerNameKr>루트비히 판 베토벤 (1778-1827)</ComposerNameKr>
          <ComposerDesc>
            루트비히 판 베토벤은 독일의 작곡가로 고전시대의 대표적인 작곡가이며
            음악 역사상 크나큰 업적을 이룩한 작곡가로 평가받습니다. 게다가
            음악가에게 사형선고나 다름없는 청각장애를 딛고 위대한 유산을
            일구었기 때문에 불굴의 의지와 인간승리를 상징하는 인물로 유명합니다.
            그의 음악에서도 이러한 고뇌와 인생 역전의 분위기가 잘 드러납니다.
          </ComposerDesc>
        </Center>
        <RepresentativeSong>
          <Hr />
          대표작
          <Hr />
        </RepresentativeSong>
        <Songs>
          <SongsDiv color="#535645">
            <p>교향곡</p>
          </SongsDiv>
          <SongsDiv color="#535645">
            <p>협주곡</p>
          </SongsDiv>
          <SongsDiv color="#535645">
            <p>피아노 소나타</p>
          </SongsDiv>
          <SongsDiv color="#535645">
            <p>첼로 소나타</p>
          </SongsDiv>
          <SongsDiv color="#535645">
            <p>운명 교향곡</p>
          </SongsDiv>
        </Songs>
      </SecondContain>

      <SecondContain id="section5" ref={sectionRefs[4]}>
        <Center>
          <ComposerName>Wolfgang Amadeus Mozart</ComposerName>
          <ComposerNameKr>
            볼프강 아마데우스 모차르트 (1756-1791)
          </ComposerNameKr>
          <ComposerDesc>
            볼프강 아마데우스 모차르트는 오스트리아의 작곡가로, 고전시대
            대표적인 작곡가 중 한 사람입니다. 그의 작품은 극적이고 감성적이며,
            뛰어난 작곡 기술과 명확한 음악적 아이디어를 바탕으로 세련되고
            아름다운 멜로디와 풍부한 하모니를 특징으로 합니다.
          </ComposerDesc>
          <ComposerImg>
            <ComposerImgFile src={mozart} />
          </ComposerImg>
        </Center>
        <RepresentativeSong>
          <Hr />
          대표작
          <Hr />
        </RepresentativeSong>
        <Songs>
          <SongsDiv color="#30362C">
            <p>
              오페라
              <br />
              피겨의 결혼
            </p>
          </SongsDiv>
          <SongsDiv color="#30362C">
            <p>교향곡</p>
          </SongsDiv>
          <SongsDiv color="#30362C">
            <p>협주곡</p>
          </SongsDiv>
          <SongsDiv color="#30362C">
            <p>성악곡</p>
          </SongsDiv>
          <SongsDiv color="#30362C">
            <p>작은별 변주곡</p>
          </SongsDiv>
        </Songs>
      </SecondContain>
      <ScrollBtn>
        <Border />
        {ButtonData.map(
          ({ text, sectionId, styledComponent: ButtonComponent }) => {
            const selected = sectionId === selectedSection
            return (
              <ScrollButton
                key={sectionId}
                text={text}
                sectionId={sectionId}
                selected={selected}
                onClick={scrollToSection}
                ButtonComponent={ButtonComponent}
              />
            )
          }
        )}
      </ScrollBtn>
      <MoveRecommendPage onClick={() => navigate('/recommend')}>
        음악 <br />
        감상하러
        <br />
        가기
      </MoveRecommendPage>
    </Wrap>
  )
}

export default Main
