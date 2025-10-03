import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutDetailsService } from '../../about-details/about-details.service';
import { catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-institute-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './institute-services.component.html',
  styleUrls: ['./institute-services.component.scss']
})
export class InstituteServicesComponent {
  @Input() lang: string;
  @Input() items: any;

  isLoading:boolean=false;
  itemsList:any=[];

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
  constructor(private _AboutDetailsService: AboutDetailsService){

  }
  ngOnInit(){
    this.getList();
    // this.itemsList=this.sections
   }

  private getList(): void {
    this.isLoading = true;
    
    this._AboutDetailsService.getInstituteServices().pipe(
      // Catch any error and handle it
      catchError((error) => {
        console.error('Error fetching about page:', error);
        return of(null); // Return a fallback value or handle it as needed
      }),
      // Finalize will always run after the observable completes or errors out
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((response) => {
      if (response) {
        this.itemsList=response.data;
      }
    });
  }
}

