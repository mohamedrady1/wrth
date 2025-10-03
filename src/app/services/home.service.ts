import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClient: HttpClient) {}

  getHomeData(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}MainPage/homepage`);
  }

  getProgramLinks(): Observable<any> {
    return this._HttpClient.get(
      `${environment.apiUrl}EducationProgramPage/education`
      // `${environment.apiUrl}MainPage/homepage`

    );
  }

  fixedNavbarLinks = [
    {
      ar: 'الأسئلة الشائعة',
      en: 'FAQs',
      url: '/faqs',
    },
    {
      en: "Academic Calendar",
      ar: "التقويم الدراسي",
      url: "royal-institute-calendar",
    },
    {
      ar: 'سياسة الاستخدام والخصوصية',
      en: 'Privacy Policy',
      url: '/privacy',
    },
  ];

  home = {
    slider: {
      url: '../../assets/hero-video.mp4',
      description:
        'Where it manifests itself&#10; Traditional arts of the Kingdom&#10;We refinish and reimagine it',
      descriptionAr:
        '&#1581;&#1610;&#1579; &#1578;&#1578;&#1580;&#1604;&#1609;<p>&#160;&#1601;&#1606;&#1608;&#1606; &#1575;&#1604;&#1605;&#1605;&#1604;&#1603;&#1577; &#1575;&#1604;&#1578;&#1602;&#1604;&#1610;&#1583;&#1610;&#1577;</p><p>&#1608;&#1606;&#1593;&#1610;&#1583; &#1589;&#1602;&#1604;&#1607;&#1575;&#160; &#1608;&#1578;&#1589;&#1608;&#1585;&#1607;&#1575;</p>',
    },
    topics: [
      {
        title: 'Vision and Landmarks',
        titleAr: 'رؤية ومعالم',
        description:
          '<span>Highlighting Saudi&#8217;s national identity, raising public awareness, and promoting a wide range of Saudi cultural landmarks globally.</span>',
        descriptionAr:
          '<span>&#1573;&#1576;&#1585;&#1575;&#1586; &#1575;&#1604;&#1607;&#1608;&#1610;&#1577; &#1575;&#1604;&#1608;&#1591;&#1606;&#1610;&#1577; &#1575;&#1604;&#1587;&#1593;&#1608;&#1583;&#1610;&#1577; &#1548; &#1608;&#1606;&#1588;&#1585; &#1575;&#1604;&#1608;&#1593;&#1610; &#1575;&#1604;&#1593;&#1575;&#1605; &#1548; &#1608;&#1575;&#1604;&#1578;&#1585;&#1608;&#1610;&#1580;</span><br><span>&#10;&#1604;&#1605;&#1580;&#1605;&#1608;&#1593;&#1577; &#1608;&#1575;&#1587;&#1593;&#1577; &#1605;&#1606; &#1575;&#1604;&#1605;&#1593;&#1575;&#1604;&#1605; &#1575;&#1604;&#1579;&#1602;&#1575;&#1601;&#1610;&#1577; &#1575;&#1604;&#1587;&#1593;&#1608;&#1583;&#1610;&#1577; &#1593;&#1604;&#1609; &#1575;&#1604;&#1589;&#1593;&#1610;&#1583; &#1575;&#1604;&#1593;&#1575;&#1604;&#1605;&#1610;.</span>',
      },
      {
        title: 'Training Programs',
        titleAr: 'برامج تدريبية',
        description:
          '<span>In a creative environment, we offer cultural education and community programs that aim to develop unique local capabilities in Traditional Arts.</span>',
        descriptionAr:
          '<span>&#1576;&#1610;&#1574;&#1577; &#1573;&#1576;&#1583;&#1575;&#1593;&#1610;&#1577; &#1608;&#1576;&#1585;&#1575;&#1605;&#1580; &#1578;&#1593;&#1604;&#1610;&#1605;&#1610;&#1577; &#1608;&#1579;&#1602;&#1575;&#1601;&#1610;&#1577; &#1608;&#1605;&#1580;&#1578;&#1605;&#1593;&#1610;&#1577; &#1604;&#1578;&#1591;&#1608;&#1610;&#1585; &#1575;&#1604;&#1602;&#1583;&#1585;&#1575;&#1578; &#1575;&#1604;&#1608;&#1591;&#1606;&#1610;&#1577; &#1601;&#1610; &#1575;&#1604;&#1601;&#1606;&#1608;&#1606; &#1575;&#1604;&#1578;&#1602;&#1604;&#1610;&#1583;&#1610;&#1577;.</span>',
      },
      {
        title: 'Life Skills',
        titleAr: 'مهارات حية',
        description:
          '<span>Supporting craftsmen and practitioners. creating a future</span><br><span>&#10;of cultural job opportunities. </span>',
        descriptionAr:
          '<section><div ><div ><div ><div ><div ><div ><div ><div ><div ><div ><div ><p>&#1583;&#1593;&#1605; &#1575;&#1604;&#1581;&#1585;&#1601;&#1610;&#1610;&#1606; &#1608;&#1575;&#1604;&#1605;&#1605;&#1575;&#1585;&#1587;&#1610;&#1606;&#1548; &#1608;&#1582;&#1604;&#1602; &#1605;&#1587;&#1578;&#1602;&#1576;&#1604; &#1605;&#1606; &#1575;&#1604;&#1601;&#1585;&#1589; &#1604;&#1604;&#1573;&#1576;&#1583;&#1575;&#1593; &#1575;&#1604;&#1579;&#1602;&#1575;&#1601;&#1610; &#1601;&#1610; &#1575;&#1604;&#1601;&#1606;&#1608;&#1606; &#1575;&#1604;&#1578;&#1602;&#1604;&#1610;&#1583;&#1610;&#1577;.</p></div></div></div></div></div></div></div></div></div></div></div></section><section class="none medium-bottom-section-spacing clearfix seeds-section seeds-1col"><div class="container"><div class="row"><div class="col-12"><div class="views-element-container block block-views block-views-blockprograms-homepage-programs"></div></div></div></div></section>',
      },
    ],
    educationPrograms: [
      {
        url: '../../assets/images/program_01.jpg',
        title: 'Apprenticeship',
        titleAr: 'برامج التلمذة',
        slug: 'apprenticeship',
      },
      {
        url: '../../assets/images/program_02.jpg',
        title: 'Academic Programs',
        titleAr: 'البرامج الأكاديمية',
        slug: 'academicprograms',
      },
      {
        url: '../../assets/images/program_03.jpg',
        title: 'Continuing Education (Short Courses)',
        titleAr: 'برامج التعليم المستمر',
        slug: 'continuingeducation',
      },
      {
        title: 'Cooperative training',
        titleAr: 'التدريب التعاوني',
        slug: 'cooperativetraining',
      },

    ],
    aboutInstitutePages: [
      {
        title: 'The Royal Institute of Traditional Arts - Wrth',
        titleAr: 'المعهد الملكي للفنون التقليدية "وِرث"',
        slug: 'abouttheinstitute',
      },
      {
        title: 'Institute Strategy',
        titleAr: 'إستراتيجية المعهد',
        slug: 'institutestrategy',
      },
      {
        title: 'Objectives',
        titleAr: 'الأهداف',
        slug: 'objectives',
      },
      {
        title: 'Organizational Structure',
        titleAr: 'الهيكل التنظيمي',
        slug: 'organizationalstructure',
      },
      {
        title: 'The Institute Services',
        titleAr: 'ما يقدمة المعهد',
        slug: 'theinstituteservices',
      },
      {
        title: 'Executive Management',
        titleAr: 'الإدارة التنفيذية',
        slug: 'executivemanagement',
      },
    ],
    mediaPages: [
      {
        title: 'News',
        titleAr: 'الأخبار',
        slug: 'news',
      },
      {
        title: 'Institute Blogs',
        titleAr: 'المدونة',
        slug: 'institute-blogs',
      },
      {
        title: 'Photo Gallery',
        titleAr: 'مكتبة الصور',
        slug: 'photo-gallery',
      },
    ],
    loginPages:[
      {
        title: 'SIS',
        titleAr: 'منصة معلومات الطالب',
        link: 'https://edugate.wrth.edu.sa/wrth/init',
      },
      {
        title: 'LMS',
        titleAr: ' منصة تعلم الطالب',
        link: 'https://lms.wrth.edu.sa/login/index.php',
      },
    ],
    leadershipProgramsPages:[
      {
        title: 'Ttraditional Arts Incubator',
        titleAr: 'حاضنة الفنون التقليدية',
        slug: 'traditionalartsincubator',
      },
      {
        title: 'Traditional Arts Accelerator',
        titleAr: 'مسرعه الفنون التقليدية',
        slug: 'traditionalartsaccelerator',
      },
      {
        title: 'Artisans Empowerment Portal',
        titleAr: 'بوابة تمكين الحرفيين',
        slug: 'artisansempowermentportal',
      }
    ],
    awarenessprogrammes:[
      {
        title: 'Community Programs',
        titleAr: 'البرامج المجتمعية',
        slug: 'communityprograms',
      },
      {
        title: 'Wrth Community',
        titleAr: 'مجتمع ورث',
        slug: 'wrthcommunity',
      }
    ]
  };
}
