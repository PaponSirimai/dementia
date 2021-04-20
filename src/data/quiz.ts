// import { QuizData } from '../../@types'

export const content = [
  {
    route: '1',
    index: 0,
    heading: 'ข้อมูลชุดที่ 1',
    question: 'ภาวะสมองเสื่อม<br/> เป็นเรื่องปกติของคนแก่',
    answer:
      'แม้จะมีโอกาสพบภาวะสมองเสื่อมในผู้สูงอายุ มากกว่าในวัยอื่นๆ แต่ผู้สูงอายุก็ไม่จำเป็นต้อง สมองเสื่อมเสมอไป ความเชื่อนี้ทำให้พวกเรา ชะล่าใจที่จะป้องกัน สังเกตความ ผิดปกติของตนเองหรือคนใกล้ตัว และเข้ารับ การคัดกรองสมองเสื่อมตั้งแต่เนิ่นๆ จึงมัก ตรวจพบสมองเสื่อมในรายที่มีอาการรุนแรง ไม่สามารถใช้ชีวิตประจำวันด้วยตนเองได้แล้ว',
    answerChoice: false,
    image_url: '/images/quiz/s1-01.jpg',
    image_alt: 'quiz-1',
    column: 'quiz1',
    prev: '/quiz/landing',
    next: '/quiz/2',
  },
  {
    route: '2',
    index: 1,
    heading: 'ข้อมูลชุดที่ 2',
    question: 'หากได้รับการรักษา ส่วนใหญ่แล้ว<br/> ผู้ป่วยภาวะสมองเสื่อม<br/> สามารถหายขาดได้',
    answer:
      '90% ของผู้ป่วยภาวะสมองเสื่อม ไม่สามารถรักษาให้หายขาดได้ มีเพียง 10% ที่มีโอกาสกลับมาหายขาดหากตรวจพบ สาเหตุและได้รับการรักษาในระยะเริ่มต้น ส่วนผู้ที่มีภาวะความทรงจำบกพร่อง (MCI) ก็มีโอกาสที่จะชะลอความเสื่อมของสมองไม่ให้ พัฒนาไปสู่ระยะที่รุนแรงขึ้นได้',
    answerChoice: false,
    image_url: '/images/quiz/s1-02.jpg',
    image_alt: 'quiz-2',
    column: 'quiz2',
    prev: '/quiz/1',
    next: '/quiz/3',
  },
  {
    route: '3',
    index: 2,
    heading: 'ข้อมูลชุดที่ 3',
    question: 'การปรับเปลี่ยนพฤติกรรม<br/> ช่วยป้องกัน<br/> และชะลอสมองเสื่อมได้',
    answer:
      'การปรับเปลี่ยนพฤติกรรม เช่น หมั่นออก กำลังกายเพื่อให้เลือดไหลเวียนไปเลี้ยงสมอง เข้าสังคม ฝึกภาษาใหม่เพื่อบริหารสมอง ลดอาหารที่มีคอเลสเตอรอลสูงและไขมันสูง งดการดื่มแอลกอฮอล์ และงดสูบบุหรี่ สามารถลดความเสี่ยงต่อภาวะสมองเสื่อม และช่วยชะลอความเสื่อมของสมองในผู้ที่มี ภาวะความทรงจำบกพร่อง (MCI) ได้',
    answerChoice: true,
    image_url: '/images/quiz/s1-03.jpg',
    image_alt: 'quiz-3',
    column: 'quiz3',
    prev: '/quiz/2',
    next: null,
  },
]
