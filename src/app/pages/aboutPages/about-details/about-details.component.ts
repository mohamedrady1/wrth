import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AboutDetailsService } from './about-details.service';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.scss'],
})
export class AboutDetailsComponent implements OnChanges, OnInit {
  aboutArr: any = [];
  pageContent: any = {};
  isLoading = false;
  subtitle: string = '';
  subtitleAr: string = '';

  lang = this._GlobalService.lang.getValue();
  imageError: boolean = false;

  isDataChange: boolean = false;

  @Input() name = '';

  items = [
    {
      id: 1,
      slug: 'vision',
      title: 'Vision',
      titleAr: 'الرؤية',
      icon: '',
      content: `
      <p>
      We envision a future where Saudi Arabia’s rich heritage of traditional arts flourish both locally and internationally.</p>
    `,
      contentAr: `
      <p>
      فنون تقليدية سعودية ثرية ومزدهرة محليًا ودوليًا.</p>
    `,
    },
    {
      id: 2,
      slug: 'mission',
      title: 'Mission',
      titleAr: 'الرسالة',
      icon: '',
      content: `
      <p>
      To enable the traditional arts sector in the Kingdom by providing quality educational, cultural and community programs, and promoting rigorous research, documentation, and innovation for a vibrant and sustainable market.</p>
    `,
      contentAr: `
      <p>
      تمكين قطاع الفنون التقليدية بالمملكة من خلال تقديم برامج تعليمية وثقافية ومجتمعية نوعية وتحفيز التوثيق والبحث والابتكار لسوقٍ حيويٍ مستدام.</p>
    `,
    }
    ,
    {
      id: 3,
      slug: 'goals',
      title: 'Goals',
      titleAr: 'الأهداف',
      content: `
    <div class="content">
      <div class="clearfix text-formatted field field--name-seeds-body field--type-text-with-summary field--label-hidden field__item">
        <ul style="padding: 0; list-style: none;">
          <li>Emphasize the national identity by enriching and promoting traditional arts.</li>
          <li>Encourage and train talents and capabilities in the traditional arts and provide educational programs that suit their aspirations.</li>
          <li>Honor and protect living pioneers in recognition of their contributions to the traditional arts, and provide incentives and financial support to continue supporting and publicizing their efforts.</li>
          <li>Contribute to the preservation of tangible and intangible traditional arts assets.</li>
          <li>Raise awareness of the traditional arts in the Kingdom by disseminating them locally and internationally, and encourage and support efforts aimed at preserving them.</li>
        </ul>
      </div>
    </div>
  `,
      contentAr: `
<div class="content">
  <div class="clearfix text-formatted field field--name-seeds-body field--type-text-with-summary field--label-hidden field__item">
    <ul dir="rtl" style="padding: 0; list-style: none;">
      <li>التأكيد على الهوية الوطنية من خلال إثراء الفنون التقليدية والترويج لها.</li>
      <li>تشجيع وتدريب المواهب والقدرات في مجالات الفنون التقليدية وتوفير برامج تعليمية تناسب تطلعاتهم.</li>
      <li>تقدير الكنوز الحية للمتميزين وذوي الريادة لإسهاماتهم في مجالات الفنون التقليدية، وتكريمهم، وتوفير المحفزات والدعم المادي لمواصلة أعمالهم والتعريف بها.</li>
      <li>المساهمة في الحفاظ على أصول الفنون التقليدية المادية وغير المادية.</li>
      <li>رفع مستوى الوعي بالفنون التقليدية في المملكة، ونشرها، والتعريف بها محلياً ودولياً، وتشجيع الجهود الهادفة إلى الحفاظ عليها.</li>
    </ul>
  </div>
</div>
`
    }, {
      id: 4,
      slug: 'pillars',
      title: 'Strategic Pillars',
      titleAr: 'الركائز الإستراتيجية',
      content: `
  <h3>Strategic Pillars</h3>
  <p>The strategy of the Royal Institute of Traditional Arts (Wirath) revolves around four strategic pillars and a supporting enabling pillar, as follows:</p>

  <h3>Enabled National Capabilities</h3>
  <p>Building a generation specialized in traditional arts and cultural heritage through education and training programs following the best global practices.</p>

  <h3>Established Traditional Arts</h3>
  <p>Preserving and documenting Saudi traditional arts and cultural heritage to enhance national identity in research and academic fields, locally and internationally, through support in research and empowerment.</p>

  <h3>Celebrated Traditional Arts</h3>
  <p>Reviving and celebrating Saudi traditional arts locally and enhancing their global presence through community engagement and awareness programs.</p>

  <h3>Enabled Competencies for a Vibrant Market</h3>
  <p>Developing the Saudi traditional arts market by empowering competencies to achieve excellence in entrepreneurship and connecting them to the labor market.</p>

  <h4>Enhancing the Royal Institute's Capabilities</h4>
  <p>Building a flexible and effective institution in the Saudi traditional arts sector through institutional excellence, technical empowerment, quality partnerships, global talent acquisition, and financial resource diversification.</p>
    `,
      contentAr: `
    <h3>الركائز الاستراتيجية</h3>
    <p>تتمحور استراتيجية المعهد الملكي للفنون التقليدية (ورث) حول أربع ركائز استراتيجية وركيزة تمكينية داعمة كما يلي:</p>
  
    <h3>قدرات وطنية ممكّنة</h3>
    <p>بناء جيل متخصص في الفنون التقليدية والتراث الثقافي من خلال برامج التعليم والتدريب وفق أفضل الممارسات العالمية.</p>
  
    <h3>فنون تقليدية راسخة</h3>
    <p>المحافظة على الفنون التقليدية السعودية والتراث الثقافي، وتوثيقها لتعزيز الهوية الوطنية في المجالات البحثية/الأكاديمية محليًا ودوليًا، من خلال دعم مجالات البحث والتمكين.</p>
  
    <h3>فنون تقليدية محتفى بها</h3>
    <p>إحياء الفنون التقليدية السعودية والاحتفاء بها محليًا وتعزيز مكانتها عالميًا من خلال المشاركة المجتمعية والبرامج التوعوية.</p>
  
    <h3>كفاءات ممكّنة لسوق حيوي</h3>
    <p>تنمية سوق الفنون التقليدية السعودية من خلال تمكين الكفاءات لتحقيق التميز في ريادة الأعمال والمساهمة في ربطهم بسوق العمل.</p>
  
    <h3>تعزيز ممكّنات المعهد الملكي للفنون التقليدية</h3>
    <p>بناء مؤسسة مرنة وفاعلة في قطاع الفنون التقليدية السعودية من خلال التميز المؤسسي والتمكين التقني وبناء الشراكات النوعية واستقطاب المواهب والكفاءات العالمية وتنويع الموارد المالية.</p>
    `
    },
    {
      id: 5,
      slug: 'institute',
      title: 'Institute Values',
      titleAr: 'القيم المؤسسية',
      content: `
      <ul>
        <li style="list-style: none;">
          <strong>Authenticity:</strong><br />
          We take pride in our heritage and cultural history, cherishing our role as contributors to its preservation.
        </li>
        <li style="list-style: none;">
          <strong>Perseverance:</strong><br />
          We deliver excellence and high professionalism, noticeable to the beneficiaries of our services.
        </li>
        <li style="list-style: none;">
          <strong>Collaboration:</strong><br />
          We work with a unified spirit to enhance the quality of the services provided.
        </li>
        <li style="list-style: none;">
          <strong>Innovation and Creativity:</strong><br />
          We strive to offer innovative solutions and guide innovators toward broader horizons.
        </li>
        <li style="list-style: none;">
          <strong>Professionalism:</strong><br />
          We deliver excellence and high professionalism, noticeable to the beneficiaries of our services.
        </li>
      </ul>
    `,
      contentAr: `
      <ul style="padding: 0;">
        <li style="list-style: none;">
          <strong>الأصالة:</strong><br />
          نفخر بتراثنا وتاريخنا الثقافي ونعتز بكوننا مساهمين في الحفاظ عليه
        </li>
        <li style="list-style: none;">
          <strong>العزم والمثابرة:</strong><br />
          نتجاوز التحديات بإصرارنا لنتطور ونُحقق طموحاتنا
        </li>
        <li style="list-style: none;">
          <strong>التعاون:</strong><br />
          نعمل بروح الفريق الواحد لرفع جودة الخدمات المقدمة
        </li>
        <li style="list-style: none;">
          <strong>الإبداع والابتكار:</strong><br />
          نسعى إلى تقديم الحلول المبتكرة ونأخذ بيد المبدعين لآفاق أوسع
        </li>
        <li style="list-style: none;">
        <strong>التميز المهني:</strong><br />
        نعمل بإحسان واحترافية عالية يلاحظها المستفيدين في تقديم خدماتنا
        </li>
        </ul>
        `,
    }

  ];
  content = [
    {
      icon: 'assets/images/wrth-goals/hands.svg',
      descriptionAr: 'التأكيد على الهوية الوطنية من خلال إثراء الفنون التقليدية والترويج لها.',
      description: 'Emphasizing national identity by enriching and promoting traditional arts.',
    }, {
      icon: 'assets/images/wrth-goals/hummer.svg',
      descriptionAr: 'تشجيع وتدريب المواهب في مجالات الفنون التقليدية وتوفير برامج تعليمية تناسب تطلعاتهم.',
      description: 'Encouraging and training talents in the fields of traditional arts and providing educational programs that match their aspirations.',
    }, {
      icon: 'assets/images/wrth-goals/home.svg',
      descriptionAr: 'المساهمة في الحفاظ علي أصول الفنون التقليدية المادية وغير المادية',
      description: 'Contributing to preserving the tangible and intangible assets of traditional arts',
    },{
      icon: 'assets/images/wrth-goals/mailman.svg',
      descriptionAr: 'رفع مستوى الوعي بالفنون التقليدية في المملكة، ونشرها والتعريف بها محلياً ودولياً، وتشجيع الجهود الهادفة إلى الحفاظ عليها.',
      description: 'Raising awareness of traditional arts in the Kingdom, promoting and introducing them locally and internationally, and encouraging efforts aimed at preserving them..',
    },
    {
      icon: 'assets/images/wrth-goals/amphora.svg',
      descriptionAr: 'تقدير الكنوز الوطنية الحية والمتميزين وذوي الريادة والإسهامات في مجالات الفنون التقليدية، وتكريمهم، وتوفير المحفزات والدعم المادي لهم لمواصلة أعمالهم والتعريف بها.',
      description: 'Appreciating living national treasures, distinguished individuals, and pioneers with contributions in the fields of traditional arts, honoring them, and providing incentives and financial support to help them continue their work and promote it.'
    },
  ]
  sections = [
    {
      title: 'Education and Training',
      titleAr: 'التعليم والتدريب',
      items: [
        {
          title: 'Apprenticeship Programs:',
          titleAr: 'برامج التلمذة:',
          description:
            'This is one of the training programs offered by the institute, focusing on regular training to equip the trainee with the knowledge, skills, and values necessary to practice a craft that requires qualification. It aims to sustain these knowledge, skills, and values to meet the requirements of the current age and evolving vision, with the goal of preserving heritage origins and reviving others that are disappearing.',
          descriptionAr:
            'هي أحد البرامج التدريبية التي يقدمها المعهد، والتي تقوم على التدريب المنتظم لاكتساب المتتلمذ المعارف والمهارات والقيم اللازمة لممارسة حرفة تستوجب تأهيلاً وتحقيق ملاءمة هذه المعارف والمهارات والقيم لمتطلبات العصر الحالي وتطور الرؤية، وذلك بهدف الحفاظ على أصول التراث وإحياء الحرف المندثرة'
        },
        {
          title: 'Short Courses and Specialized Programs:',
          titleAr: 'دورات قصيرة وبرامج تخصصية:',
          description:
            'These are courses that last for several days, focusing on meeting community needs for traditional arts and providing participants with essential skills in a more specialized way, allowing them to enhance their skills and knowledge in a short period',
          descriptionAr:
            'هي الدورات التي تستغرق عدة أيام وتركز على تثقيف أفراد المجتمع بالفنون التقليدية وإكسابهم مهارات أساسية في المجال او التخصص و وتهدف لتقديم فرصة تعلم سريعة للأشخاص الذين يبحثون عن تحسين مهاراتهم ومعرفتهم في وقت قصير'
        },
        {
          title: 'Academic Programs:',
          titleAr: 'البرامج الأكاديمية:',
          description:
            'These are programs that last several weeks or months and focus on acquiring knowledge, skills, and values specific to a specialization in one of the institute’s fields. They aim to develop job performance and prepare for the requirements of the job market.',
          descriptionAr:
            'هي البرامج التي تستغرق عدة أسابيع أو أشهر وتركز على اكتساب معارف ومهارات وقيم محددة التخصص في أحد مجالات المعهد، وتهدف لتطوير الأداء الوظيفي، والتأهيل لمتطلبات سوق العمل.'
        }
      ]
    },
    {
      title: 'Support and Recognition',
      titleAr: 'الدعم والتقدير',
      items: [
        {
          title: 'Living National Treasures:',
          titleAr: 'الكنوز الوطنية الحية:',
          description:
            'Discovering living national treasures and creating opportunities to pass their skills on to future generations.',
          descriptionAr:
            'اكتشاف الكنوز الوطنية الحية وخلق الفرص لنقل مهاراتهم إلى الأجيال القادمة.'
        },
        {
          title: 'Awards:',
          titleAr: 'الجوائز:',
          description:
            'Recognizing and honoring the best practitioners in various fields of traditional arts.',
          descriptionAr:
            'تكريم وتقدير أفضل الممارسين في مختلف مجالات الفنون التقليدية.'
        },
        {
          title: 'Quality Projects:',
          titleAr: 'المشاريع النوعية:',
          description:
            'The institute supports the activation and involvement of artisans in quality projects and luxury gift projects.',
          descriptionAr:
            'يدعم المعهد تفعيل وإشراك الحرفيين في المشاريع النوعية ومشاريع الهدايا الفاخرة.'
        }
      ]
    },
    {
      title: 'Communication and Awareness',
      titleAr: 'التواصل والتوعية',
      items: [
        {
          title: 'Events and Activities:',
          titleAr: 'المناسبات والفعاليات:',
          description:
            'The institute offers a series of exhibitions and promotional events that raise awareness and appreciation of traditional arts and cultural heritage.',
          descriptionAr:
            'يقدم المعهد سلسلة من المعارض والفعاليات الترويجية التي من شأنها رفع الوعي والتقدير للفنون التقليدية والتراث الثقافي.'
        },
        {
          title: 'School Visit Programs:',
          titleAr: 'برامج الزيارات المدرسية:',
          description:
            'The institute promotes traditional arts through frequent visits to its premises from schools and other educational institutions.',
          descriptionAr:
            'يعزز المعهد الفنون التقليدية من خلال الزيارات المتكررة إلى حرم المعهد من المدارس والمعاهد التعليمية الأخرى.'
        },
        {
          title: 'Creative Spaces and Workshops:',
          titleAr: 'المساحات وورش العمل الإبداعية:',
          description:
            'The institute offers equipped workspaces for designers, artists, and craftsmen to foster communication and exchange of creative ideas.',
          descriptionAr:
            'يوفر المعهد في حرمه مساحات عمل مجهزة للمصممين والفنانين والحرفيين لتعزز تواصلهم وخلق الأفكار الإبداعية وتبادلها.'
        }
      ]
    },
    {
      "title": "Professional Empowerment and Entrepreneurship",
      "titleAr": "التمكين المهني وريادة الأعمال",
      "items": [
        {
          "title": "Professional Empowerment:",
          "titleAr": "التمكين المهني:",
          "description": "The institute supports its students and graduates by preparing them for the job market, in addition to assisting them in securing employment after graduation.",
          "descriptionAr": "يدعم المعهد طلابه وخريجيه بتهيئتهم لسوق العمل إضافة إلى دعمهم في الحصول على وظائف بعد تخرجهم."
        },
        {
          "title": "Business Incubators:",
          "titleAr": "حاضنات الأعمال:",
          "description": "The institute supports its students in starting their businesses in the field of traditional arts by establishing incubators and accelerators.",
          "descriptionAr": "يدعم المعهد طلابه لبدء أعمالهم التجارية في مجالات الفنون التقليدية من خلال إنشاء حاضنات ومسرعات الأعمال."
        },
        {
          "title": "Gift Shop:",
          "titleAr": "متجر الهدايا:",
          "description": "An on-campus and online gift shop allows students, faculty, and staff to display and sell their artistic works.",
          "descriptionAr": "متجر داخل الحرم الجامعي ومتجر إلكتروني يسمح للطلاب وأعضاء هيئة التدريس والفريقين بعرض وبيع أعمالهم الفنية."
        }
      ]
    },
    {
      "title": "International Communication",
      "titleAr": "التواصل الدولي",
      "items": [
        {
          "title": "Intensive Visits (Residency Programs):",
          "titleAr": "الزيارات المكثفة (برامج الإقامة):",
          "description": "Collaborating with institute partners to offer residencies in Saudi Arabia and abroad.",
          "descriptionAr": "التعاون مع شركاء المعهد لتوفير إقامات في المملكة العربية السعودية وخارجها."
        },
        {
          "title": "Exchange Programs:",
          "titleAr": "برامج التبادل:",
          "description": "Partnerships with art institutes worldwide to facilitate student, knowledge, and cultural exchange.",
          "descriptionAr": "الشراكة مع المعاهد الفنية على مستوى العالم لتسهيل التبادل الطلابي والمعرفي والثقافي."
        },
        {
          "title": "International Students:",
          "titleAr": "الطلاب الدوليون:",
          "description": "Attracting students from diverse backgrounds and countries to experience a multicultural environment at the institute.",
          "descriptionAr": "جذب الطلاب من خلفيات وبلدان متنوعة إلى المعهد للسماح بتجربة متعددة الثقافات."
        }
      ]
    },
    {
      "title": "Research and Documentation",
      "titleAr": "البحث والتوثيق",
      "items": [
        {
          "title": "Research Programs:",
          "titleAr": "البرامج البحثية:",
          "description": "Supporting research programs, publishing traditional arts, and extracting insights and studies through reports, scientific papers, and specialized books.",
          "descriptionAr": "دعم البرامج البحثية ونشر الفنون التقليدية واستخلاص الرؤى والدراسات المتعلقة بها من خلال التقارير المتنوعة والأوراق والمجلات العلمية والكتب المتخصصة."
        },
        {
          "title": "Research Grants:",
          "titleAr": "المنح البحثية:",
          "description": "Providing research grants to enhance local and global awareness of traditional arts, reinforcing national identity, and offering opportunities for researchers to celebrate the national heritage.",
          "descriptionAr": "تقديم المنح البحثية لإثراء الوعي المحلي والعالمي بالفنون التقليدية وتأصيل الهوية الوطنية وإعطاء الفرص للباحثين في خط الاحتفاء بالإرث الوطني."
        },
        {
          "title": "Documentation:",
          "titleAr": "التوثيق:",
          "description": "Establishing a documentation database for cultural elements and origins in traditional arts according to approved documentation methods and archiving materials digitally to ensure preservation and accessibility.",
          "descriptionAr": "بناء قاعدة بيانات توثيقية للعناصر والأصول الثقافية في الفنون التقليدية وفق المناهج المعتمدة في التوثيق وأرشفة المواد رقميًا لضمان المحافظة عليها وتمكين الوصول إليها."
        }
      ]
    }
  ];
  managmentItems = [
    {
      id: 1,
      name: 'Susan Mohammed Al-Yahyai',
      nameAr: 'د.سوزان محمد اليحيي',
      email: 'SusanMohammedAl-Yahyai@gmail.com',
      number: '',
      img: '',
      gender:0,
      roleEn: 'chief executive officer',
      roleAr: 'الرئيس التنفيذي '
    },
    {
      id: 2,
      name: 'Abdul Rahman Ahmed Al-Ghamdi',
      nameAr: 'د. عبدالرحمن أحمد الغامدي',
      email: 'AbdulRahmanAhmedAl-Ghamdi@gmail.com',
      number: '',
      img: '',
      gender:1,
      roleEn: 'Deputy for Educational Affairs',
      roleAr: 'وكيل الشؤون التعليمية'
    },
    {
      id: 3,
      name: 'Hamad Abdul Rahman Al-Harqan',
      nameAr: 'أ. حمد عبدالرحمن الحرقان',
      email: 'HamadAbdulRahmanAl-Harqan@yahoo.com',
      number: '',
      img: '',
      gender:0,
      roleEn: 'Agent for strategy and institutional excellence',
      roleAr: 'وكيل الاستراتيجية والتميز المؤسسي'
    },
    {
      id: 4,
      name: ' Khaled Saleh Mahjoub',
      nameAr: 'أ. خالد صالح محجوب',
      email: 'KhaledSalehMahjoub@outlook.com',
      number: '',
      img: '',
      gender:1,
      roleEn: 'Shared Services Agent',
      roleAr: 'وكيل الخدمات المشتركة'
    },
    {
      id: 5,
      name: ' Muhammad Hamad Al-Jibreen',
      nameAr: 'أ. محمد حمد الجبرين',
      email: 'MuhammadHamadAl-Jibreen@gmail.com',
      number: '',
      img: '',
      gender:0,
      roleEn: 'Executive Director of the Human Capital Sector',
      roleAr: 'المدير التنفيذي لقطاع رأس المال البشري'
    },
    {
      id: 6,
      name: 'Turki Abdul Rahman Al Khalaf',
      nameAr: 'أ. تركي عبدالرحمن الخلف',
      email: 'TurkiAbdulRahmanAlKhalaf@outlook.com',
      number: '',
      img: '',
      gender:0,
      roleEn: 'Executive Director of Marketing and Corporate Communications Sector',
      roleAr: 'المدير التنفيذي لقطاع التسويق والتواصل المؤسسي'
    },
    {
      id: 7,
      name: 'Fawaz Abdullah Al-Aqasi',
      nameAr: 'أ. فواز عبدالله العكاسي',
      email: 'FawazAbdullahAl-Aqasi@outlook.com',
      number: '',
      img: '',
      gender:0,
      roleEn: 'Executive Director of the Legal Affairs Sector',
      roleAr: 'المدير التنفيذي لقطاع الشؤون القانونية'
    }
  ];
  constructor(
    private _AboutDetailsService: AboutDetailsService,
    private _GlobalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });

    this._AboutDetailsService.getAboutPage().subscribe({
      next: (response) => {
        this.aboutArr = response.aboutPages;
        this.pageContent = response.aboutPages.find(
          (ele) => ele.slug == this.name
        );

        if (this.pageContent) {
          // this.pageContent['gitems'] = this.content;
        }
        // items

        // this.pageContent['sitems'] = this.items;
        // this.pageContent['eitems'] = this.managmentItems;
        // this.pageContent['pitems'] = this.sections;
        // console.log( this.pageContent['sections'])

        if (this.name === 'institutestrategy') {
          this.pageContent['sitems']?.forEach((item: any) => {
            if (item.slug === 'vision') {
              item.icon = 'assets/images/tabs/icons-02.png';
            } else if (item.slug === 'mission') {
              item.icon = 'assets/images/tabs/icons-03.png';
            } else if (item.slug === 'goals') {
              item.icon = 'assets/images/tabs/icons-04.png';
            } else if (item.slug === 'strategicpillars') {
              item.icon = 'assets/images/tabs/icons-05.png';
            } else if (item.slug === 'institutevalues') {
              item.icon = 'assets/images/tabs/icons-06.png';
            } else {
              item.icon = 'assets/images/tabs/default-icon.svg';
            }
          });
        }
        this.isLoading = false;
      },
    });
  }

  ngOnChanges() {
    this.isDataChange = true;
    this.pageContent = this.aboutArr.find((ele) => ele.slug == this.name);
    setTimeout(() => {
      if (this.pageContent) {
        // this.pageContent['gitems'] = this.content;
        // this.pageContent['sitems'] = this.items;
        // this.pageContent['eitems'] = this.managmentItems;
        // this.pageContent['pitems'] = this.sections;


        // if (this.name === 'institutestrategy') {
        //   this.pageContent['sitems']?.forEach((item: any) => {
        //     if (item.slug === 'vision') {
        //       item.icon = 'assets/images/tabs/icons-02.png';
        //     } else if (item.slug === 'mission') {
        //       item.icon = 'assets/images/tabs/icons-03.png';
        //     } else if (item.slug === 'goals') {
        //       item.icon = 'assets/images/tabs/icons-04.png';
        //     } else if (item.slug === 'strategicpillars') {
        //       item.icon = 'assets/images/tabs/icons-05.png';
        //     } else if (item.slug === 'institutevalues') {
        //       item.icon = 'assets/images/tabs/icons-06.png';
        //     } else {
        //       item.icon = 'assets/images/tabs/default-icon.svg';
        //     }
        //   });
        // }

      }
      this.isDataChange = false;
    }, 0);
  }

  handleError() {
    this.imageError = true;
  }
}
