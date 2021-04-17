const subject: string = localStorage.getItem('subject') ?? 'null'

export const content = [
  {
    route: 'pre',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'ต่อจากนี้<br/>เพื่อให้คุณเข้าใจภาวะ<br/>สมองเสื่อมลึกซึ้งยิ่งขึ้น<br/><br/>เราอยากชวนให้คุณ<br/>ได้ทดลองสวมบทบาท<br/>เป็นผู้สูงอายุ<br/><br/>ที่สงสัยว่าตัวเอง<br/>อาจกำลังประสบกับ<br/>ภาวะความทรงจำบกพร่อง',
    image_url: null,
    prev: null,
    next: '/simulate/landing',
  },
  {
    route: '1',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title: 'ครั้งหนึ่งคุณเคย<br/>เป็นหนุ่มสาวที่แข็งแรง',
    image_url: null,
    prev: '/simulate/pre',
    next: '/simulate/2',
  },
  {
    route: '2',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'เวลาช่างผ่านไปรวดเร็ว<br/>เหลือเกิน',
    image_url: null,
    prev: '/simulate/1',
    next: '/simulate/3',
  },
  {
    route: '3',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'กว่าจะรู้ตัวอีกที<br/>คุณก็กลายเป็นคนแก่ไปเสียแล้ว',
    image_url: '/src/images/simulate/3.svg',
    prev: '/simulate/2',
    next: '/simulate/4',
  },
  {
    route: '4',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณยังคงทำงาน<br/>และออกไปพบปะมิตรสหาย<br/>เป็นครั้งคราว',
    image_url: '/src/images/simulate/4.svg',
    prev: '/simulate/3',
    next: '/simulate/5',
  },
  {
    route: '5',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณยังดูแล<br/> รับผิดชอบตัวเองได้ดี',
    image_url: '/src/images/simulate/5.svg',
    prev: '/simulate/4',
    next: '/simulate/6',
  },
  {
    route: '6',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'แต่ในระยะหลังมานี้<br/> คุณเริ่มรู้สึกได้ถึง<br/> ความเปลี่ยนแปลงของตัวเอง',
    image_url: '/src/images/simulate/6.svg',
    prev: '/simulate/5',
    next: '/simulate/7',
  },
  {
    route: '7',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณรู้สึกว่าตัวเองขี้ลืมบ่อยขึ้น<br/> ลืมสิ่งที่เพิ่งทำไปเมื่อครู่<br/> หรือสิ่งที่เคยทำเป็นประจำ',
    image_url: '/src/images/simulate/7.svg',
    prev: '/simulate/6',
    next: '/simulate/8',
  },
  {
    route: '8',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'หลายๆ คนที่คุณคุยด้วย<br/> บอกว่าคุณมักพูดซ้ำ หรือ<br/>ถามสิ่งที่พวกเขาเพิ่งบอกคุณไป',
    image_url: '/src/images/simulate/8.svg',
    prev: '/simulate/7',
    next: '/simulate/9',
  },
  {
    route: '9',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title:
      'คุณรู้สึกว่าใช้เวลามากขึ้น<br/> เมื่อต้องคิดวางแผน<br/> เช่นการจัดกระเป๋าเดินทาง<br/> หรือไปจ่ายกับข้าวที่ตลาด',
    image_url: '/src/images/simulate/9.svg',
    prev: '/simulate/8',
    next: '/simulate/10',
  },
  {
    route: '10',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'ทำให้คุณสงสัย<br/> ว่าอาจมีความผิดปกติบางอย่าง<br/> เกิดขึ้นกับสมองของคุณ',
    image_url: '/src/images/simulate/10.svg',
    prev: '/simulate/9',
    next: '/simulate/11',
  },
  {
    route: '11',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณค้นหาข้อมูลเกี่ยวกับ<br/> ภาวะสมองเสื่อมในอินเทอร์เน็ต',
    image_url: '/src/images/simulate/11.svg',
    prev: '/simulate/10',
    next: '/simulate/12',
  },
  {
    route: '12',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'และพบว่ามีแบบทดสอบ<br/> ที่สามารถใช้ประเมินภาวะ<br/> สมองเสื่อมเองได้ณ',
    image_url: '/src/images/simulate/12.svg',
    prev: '/simulate/11',
    next: '/simulate/13',
  },
  {
    route: '13',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณพยายามนึกถึง<br/> อาการต่างๆ ของตนเอง<br/> และตอบคำถามไปทีละข้อๆ',
    image_url: '/src/images/simulate/13.svg',
    prev: '/simulate/12',
    next: '/simulate/14',
  },
  {
    route: '14',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คะแนนที่คุณได้<br/>ถูกจัดอยู่ในเกณฑ์กลุ่มเสี่ยง<br/>มีภาวะสมองเสื่อม',
    image_url: '/src/images/simulate/14.svg',
    prev: '/simulate/13',
    next: '/simulate/15',
  },
  {
    route: '15',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'โอเค<br/> สูดหายใจลึกๆ<br/> ตั้งสติๆ',
    image_url: null,
    prev: '/simulate/14',
    next: '/simulate/16',
  },
  {
    route: '16',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณอยากรู้ให้แน่ชัด<br/> ว่าคุณมีภาวะสมองเสื่อม<br/> จริงหรือเปล่า',
    image_url: null,
    prev: '/simulate/15',
    next: '/simulate/17',
  },
  {
    route: '17',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-center items-center',
    light_theme: false,
    title: 'คุณคิดว่าควรไปหาหมอ<br/>เพื่อตรวจวินิจฉัยอย่างละเอียด',
    image_url: null,
    prev: '/simulate/16',
    next: '/simulate/18',
  },
  {
    route: '18',
    bg_color: 'bg-white',
    text_color: 'text-[#444444]',
    space_type: 'justify-around',
    light_theme: false,
    title: 'ตัวเลือกที่คุณพอจะนึกออก<br/>ในตอนนี้...',
    choice: 'HospitalChoice',
    image_url: null,
    prev: '/simulate/17',
    next: '/simulate/19',
  },
  {
    route: '19',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'นอกจากการตรวจวินิจฉัย<br/> กับแพทย์แล้ว<br/><br/> อีกวิธีหนึ่งที่สามารถ<br/>ใช้ประเมินภาวะสมอง<br/>ของคุณได้สะดวกรวดเร็ว<br/><br/> คือการเข้าสู่กระบวนการ<br/> ‘คัดกรองคัดแยก’<br/> ภาวะความทรงจำบกพร่อง',
    image_url: null,
    prev: '/simulate/18',
    next: '/simulate/20',
  },
  {
    route: '20',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'การ ‘คัดกรองคัดแยก’</br>คือการทดสอบการทำงาน</br>ของสมองเบื้องต้น</br>ด้วยแบบทดสอบ</br></br>ใช้เวลาประมาณ 30 นาที</br></br>ซึ่งจะต้องได้รับการดูแล</br>และประเมินผล โดยเจ้าหน้าที่</br>ผู้ผ่านการฝึกอบรมมาแล้วเท่านั้น',
    image_url: null,
    prev: '/simulate/19',
    next: '/simulate/21',
  },
  {
    route: '21',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'การ ’คัดกรองคัดแยก’</br>จะทำให้คุณรู้ได้ว่า</br></br>อาการของคุณ</br>จัดอยู่ในกลุ่มปกติ</br> </br>หรือจัดอยู่ในกลุ่มที่มี</br>‘ภาวะความทรงจำบกพร่อง’</br>ซึ่งสามารถปรับพฤติกรรม</br>เพื่อชะลออาการได้',
    image_url: null,
    prev: '/simulate/20',
    next: '/simulate/22',
  },
  {
    route: '22',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'หรือจัดอยู่ในกลุ่มเสี่ยงมี</br>‘ภาวะสมองเสื่อม’</br>ซึ่งจะต้องเข้ารับการตรวจวินิจฉัย</br>อย่างละเอียด และรักษา</br>โดยแพทย์ต่อไป',
    image_url: null,
    prev: '/simulate/21',
    next: '/simulate/23',
  },
  {
    route: '23',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title:
      'ปัจจุบันในประเทศไทย</br>บริการ ‘คัดกรองคัดแยก’</br>ได้เริ่มต้นแล้วในพื้นที่ต้นแบบ</br></br>และอยู่ระหว่างการพัฒนา</br>ให้ครอบคลุมและเหมาะสม</br>กับในแต่ละพื้นที่</br>',
    image_url: null,
    prev: '/simulate/22',
    next: '/simulate/24',
  },
  {
    route: '24',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    title: `เราจึงอยากชวนคุณมา</br>ทำความเข้าใจรูปแบบ</br>ของการ‘คัดกรองคัดแยก’</br></br>และให้คุณเลือกวิธี</br>ที่คิดว่าเหมาะกับ <span class="font-medium">${subject}</span> ที่สุด</br></br>เพื่อช่วยพัฒนาและผลักดัน</br>ให้บริการคัดกรองคัดแยกนี้</br>ถูกนำไปขยายผลในวงกว้างต่อไป`,
    image_url: null,
    prev: '/simulate/23',
    next: '/survey/a',
  },
  {
    route: 'end',
    bg_color: 'bg-[#6866e7]',
    text_color: 'text-white',
    space_type: 'justify-center items-center',
    light_theme: true,
    mage_url: null,
    title:
      'สิ้นสุดการจำลอง<br/> บทบาทสมมติแล้วค่ะ<br/><br/> :-)<br/><br/> ขอบคุณที่ร่วมเป็นส่วนหนึ่ง<br/>ในการผลักดันให้ระบบ<br/>บริการคัดกรองคัดแยก<br/>เกิดขึ้นจริง',
    prev: null,
    next: '/outro/1',
  },
]