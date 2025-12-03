
import { ForbiddenCategory, RiskLevel, User, UserRole } from "./types";

export const FORBIDDEN_CATEGORIES: ForbiddenCategory[] = [
  {
    id: "CAT_01",
    name: "Cam kết tuyệt đối (Absolute commitments)",
    riskLevel: RiskLevel.HIGH,
    description: "Hứa hẹn lợi nhuận, cam kết chắc chắn 100% sinh lời, bao tiêu sản phẩm.",
    internalExamples: ["Cam kết x3 tài sản", "Chắc chắn có sổ đỏ trong 1 tháng", "Bao lời 100%"]
  },
  {
    id: "CAT_02",
    name: "Tuyên bố sai sự thật/thổi phồng (False/Exaggerated)",
    riskLevel: RiskLevel.HIGH,
    description: "Thông tin sai lệch về vị trí, tiện ích chưa được duyệt, hạ tầng không có thật.",
    internalExamples: ["Cách trung tâm 5 phút (thực tế 30p)", "Sắp xây sân bay ngay cạnh"]
  },
  {
    id: "CAT_03",
    name: "Ngôn từ đả kích/xúc phạm (Insults)",
    riskLevel: RiskLevel.HIGH,
    description: "Xúc phạm đối thủ, khách hàng hoặc sử dụng ngôn từ kích động.",
    internalExamples: ["Dự án kia là lừa đảo", "Chủ đầu tư X là bọn ăn cướp"]
  },
  {
    id: "CAT_04",
    name: "Nội dung phản cảm/Gợi dục (Sexual/Offensive)",
    riskLevel: RiskLevel.HIGH,
    description: "Trang phục hở hang, tư thế không phù hợp, ngôn từ gợi dục.",
    internalExamples: []
  },
  {
    id: "CAT_05",
    name: "Bạo lực/Cực đoan (Violence/Extremism)",
    riskLevel: RiskLevel.HIGH,
    description: "Đe dọa, cổ vũ bạo lực hoặc tư tưởng cực đoan.",
    internalExamples: []
  },
  {
    id: "CAT_06",
    name: "CTA gây hiểu lầm (Misleading CTAs)",
    riskLevel: RiskLevel.MEDIUM,
    description: "Nút bấm giả, hướng dẫn sai thao tác để câu like/follow.",
    internalExamples: ["Bấm vào màn hình để nhận nhà miễn phí"]
  },
  {
    id: "CAT_07",
    name: "Điều hướng nền tảng/Thông tin cá nhân (Redirect)",
    riskLevel: RiskLevel.MEDIUM,
    description: "Đọc số điện thoại, điều hướng qua Zalo/Facebook, xin thông tin cá nhân công khai.",
    internalExamples: ["Kết bạn Zalo số 09xx...", "Qua phở bò nhắn tin"]
  },
  {
    id: "CAT_08",
    name: "Sản phẩm cấm/Hạn chế (Prohibited Products)",
    riskLevel: RiskLevel.HIGH,
    description: "Bán đất rừng phòng hộ, đất quốc phòng, sản phẩm không đủ pháp lý giao dịch.",
    internalExamples: []
  }
];

export const MOCK_USERS: User[] = [
  { id: "u1", name: "Nguyễn Văn A", role: UserRole.ADMIN },
  { id: "u2", name: "Trần Thị B (Host)", role: UserRole.HOST },
  { id: "u3", name: "Lê Văn C (Host)", role: UserRole.HOST },
  { id: "u4", name: "Phạm D (Mod)", role: UserRole.MOD },
];

export const MARKETS = ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Bình Dương", "Khác"];
export const PROPERTY_TYPES = ["Chung cư (Apartment)", "Đất nền (Land)", "Nhà phố/Shophouse", "Biệt thự nghỉ dưỡng", "Khác"];
export const OBJECTIVES = ["Thu thập Leads", "Tăng nhận diện thương hiệu (Awareness)", "Chốt cọc trực tiếp (Closing)"];

// Pre-built Templates
export interface ScriptTemplate {
  id: string;
  name: string;
  description: string;
  defaultDuration: number;
  propertyType: string;
  objective: string;
  blocks: {
    title: string;
    durationMinutes: number;
    talkingPoints: string[];
    detailedScripts?: string[];
    forbiddenCategoryIds: string[];
  }[];
}

export const PREBUILT_TEMPLATES: ScriptTemplate[] = [
  {
    id: "TEMPLATE_TOWNHOUSE",
    name: "1. Nhà phố cao cấp - Bán chốt cọc",
    description: "Kịch bản an toàn tập trung vào khan hiếm & chính sách, tránh cam kết lợi nhuận.",
    defaultDuration: 90,
    propertyType: "Nhà phố/Shophouse",
    objective: "Chốt cọc trực tiếp (Closing)",
    blocks: [
      {
        title: "Intro & Disclaimer An toàn",
        durationMinutes: 10,
        talkingPoints: [
          "Chào mừng & Giới thiệu chủ đầu tư (theo hồ sơ công bố)",
          "Disclaimer: 'Thông tin trong livestream là tài liệu tham khảo tại thời điểm hiện tại'",
          "Mini-game tương tác giữ chân người xem (không yêu cầu tiền)"
        ],
        forbiddenCategoryIds: ["CAT_01"]
      },
      {
        title: "Vị trí & Quy hoạch (Dùng từ 'Tiềm năng')",
        durationMinutes: 15,
        talkingPoints: [
          "Vị trí thực tế (Check-in tại chỗ nếu có thể)",
          "Hạ tầng: Sử dụng từ 'theo quy hoạch phê duyệt', 'dự kiến triển khai'",
          "Tránh: 'Chắc chắn tăng giá', 'Cam kết mở đường vào tháng sau'"
        ],
        forbiddenCategoryIds: ["CAT_02", "CAT_01"]
      },
      {
        title: "Pháp lý Minh bạch",
        durationMinutes: 10,
        talkingPoints: [
          "Show sổ đỏ/Giấy phép xây dựng (Che thông tin nhạy cảm/cá nhân)",
          "Giải thích quy trình sang tên theo luật hiện hành",
          "Khẳng định: 'Giao dịch tuân thủ pháp luật Việt Nam'"
        ],
        forbiddenCategoryIds: ["CAT_08", "CAT_02"]
      },
      {
        title: "Sản phẩm & Cuộc sống thực tế",
        durationMinutes: 20,
        talkingPoints: [
          "Tour nhà mẫu/sa bàn",
          "Tập trung vào trải nghiệm sống, tiện ích nội khu đã hiện hữu",
          "So sánh giá tham khảo với khu vực lân cận (không dìm hàng đối thủ)"
        ],
        forbiddenCategoryIds: ["CAT_03"]
      },
      {
        title: "Chính sách & Giá bán (Tham khảo)",
        durationMinutes: 20,
        talkingPoints: [
          "Công bố bảng hàng đợt này (Số lượng có hạn)",
          "Giá bán: Dùng từ 'Giá trần/sàn tham khảo', 'Chỉ từ...'",
          "Ưu đãi: 'Dành cho khách đăng ký tư vấn hôm nay'"
        ],
        forbiddenCategoryIds: ["CAT_06", "CAT_01"]
      },
      {
        title: "Chốt cọc & CTA An toàn",
        durationMinutes: 15,
        talkingPoints: [
          "Hướng dẫn Booking/Cọc thiện chí (Có hoàn lại - Nhấn mạnh điểm này)",
          "CTA: 'Để lại bình luận để nhận bảng tính dòng tiền'",
          "Tránh: 'Chuyển khoản ngay vào stk cá nhân', 'Không mua là hết ngay'"
        ],
        forbiddenCategoryIds: ["CAT_07", "CAT_06"]
      }
    ]
  },
  {
    id: "TEMPLATE_APARTMENT",
    name: "2. Căn hộ chuyên nghiệp - Thu thập Leads",
    description: "Tối ưu cho việc giáo dục khách hàng và thu phễu data, rủi ro thấp.",
    defaultDuration: 60,
    propertyType: "Chung cư (Apartment)",
    objective: "Thu thập Leads",
    blocks: [
      {
        title: "Mở đầu & Nêu vấn đề",
        durationMinutes: 5,
        talkingPoints: [
          "Đặt vấn đề: 'Thuê nhà hay Mua nhà lời hơn?'",
          "Giới thiệu chuyên gia/Host uy tín",
          "Tuyên bố miễn trừ trách nhiệm (Nội dung tư vấn tham khảo)"
        ],
        detailedScripts: [
          "Kính chào quý vị đang theo dõi livestream. Mở đầu hôm nay, chúng ta sẽ bàn về câu hỏi kinh điển: 'Nên tiếp tục thuê nhà hay quyết định mua nhà ngay thời điểm này?'. Rất nhiều khách hàng trẻ chia sẻ với tôi rằng việc thuê nhà giúp họ linh hoạt dòng tiền đầu tư kinh doanh, không bị áp lực nợ nần. Đó là một quan điểm hợp lý. Tuy nhiên, ở góc độ tích lũy tài sản dài hạn, việc sở hữu một căn hộ không chỉ là nơi an cư lạc nghiệp mà còn là một hình thức 'bỏ ống heo' bắt buộc, giúp tài sản không bị bốc hơi do lạm phát. Hôm nay, tôi sẽ không đưa ra lời khuyên sáo rỗng kiểu 'hãy mua ngay đi'. Thay vào đó, chúng ta sẽ cùng đặt lên bàn cân các con số thực tế: Lãi suất thả nổi hiện tại so với tốc độ tăng giá thuê nhà tại khu vực này trong 3 năm qua. Tôi sẽ phân tích minh bạch các kịch bản: Khi nào thì thuê có lợi hơn? Và khi nào thì chi phí cơ hội của việc chờ đợi sẽ khiến giấc mơ an cư ngày càng xa vời? Xin lưu ý, quyết định cuối cùng phụ thuộc hoàn toàn vào sức khỏe tài chính của quý vị.",
          "Dành cho những quý vị lần đầu ghé thăm kênh, tôi là [Tên Host] - Tư vấn viên Bất động sản chuyên nghiệp. Trong suốt 5 năm làm nghề, tôn chỉ hoạt động của tôi luôn là 'Minh bạch - Trung thực - Khách quan'. Tôi hiểu rằng, mua một căn hộ là quyết định lớn của cả đời người, vì vậy, mục tiêu của tôi trong buổi live này không phải là chốt khách bằng mọi giá hay tạo ra sự khan hiếm ảo để thúc ép quý vị xuống tiền. Thay vào đó, tôi đóng vai trò là người sàng lọc thông tin, giúp quý vị nhìn thấy bức tranh toàn cảnh về dự án: từ những ưu điểm vượt trội về tiện ích, thiết kế cho đến những hạn chế còn tồn tại về hạ tầng hay tiếng ồn mà ít môi giới nào dám nói thẳng. Mọi thông tin tôi đưa ra đều dựa trên văn bản pháp lý đã được công bố và khảo sát thực tế. Tôi hy vọng những chia sẻ này sẽ là nguồn tham khảo đáng tin cậy.",
          "Trước khi đi vào chi tiết dự án, tôi xin có một tuyên bố miễn trừ trách nhiệm quan trọng để đảm bảo sự minh bạch cho buổi livestream này. Tất cả các thông tin, số liệu, bảng tính dòng tiền hay dự báo lợi nhuận mà tôi chia sẻ ngày hôm nay đều mang tính chất tham khảo, dựa trên dữ liệu thị trường tại thời điểm hiện tại và các giả định thông thường. Thị trường bất động sản luôn có những biến động không thể lường trước do thay đổi chính sách vĩ mô, quy hoạch hạ tầng hoặc lãi suất ngân hàng. Do đó, chúng tôi không đưa ra bất kỳ cam kết tuyệt đối nào về mức tăng giá hay lợi nhuận trong tương lai. Các hình ảnh phối cảnh cũng có thể có sự khác biệt nhỏ so với thực tế khi bàn giao. Quý vị khán giả vui lòng xem xét kỹ lưỡng các hồ sơ pháp lý gốc, Hợp đồng mua bán và nên tham vấn thêm ý kiến của luật sư hoặc chuyên gia tài chính độc lập."
        ],
        forbiddenCategoryIds: ["CAT_01"]
      },
      {
        title: "Tổng quan dự án & Kết nối",
        durationMinutes: 10,
        talkingPoints: [
          "Vị trí và khoảng cách di chuyển thực tế (Google Maps)",
          "Tiện ích ngoại khu: Trường học, Bệnh viện hiện hữu",
          "Tránh nói quá về các dự án bánh vẽ chưa khởi công"
        ],
        forbiddenCategoryIds: ["CAT_02"]
      },
      {
        title: "Review Chi tiết Căn hộ",
        durationMinutes: 20,
        talkingPoints: [
          "Phân tích layout, thiết kế, công năng",
          "Vật liệu bàn giao (theo danh mục HĐMB)",
          "Góc nhìn thực tế từ ban công (nếu có)"
        ],
        forbiddenCategoryIds: []
      },
      {
        title: "Bài toán tài chính (Minh họa)",
        durationMinutes: 15,
        talkingPoints: [
          "Minh họa bảng tính vay ngân hàng (Lãi suất thả nổi theo thị trường)",
          "Phân tích kịch bản cho thuê (Dựa trên giá thuê khu vực)",
          "Lưu ý: 'Số liệu mang tính ước tính, không cam kết lợi nhuận cố định'"
        ],
        forbiddenCategoryIds: ["CAT_01"]
      },
      {
        title: "Q&A - Giải đáp thắc mắc",
        durationMinutes: 5,
        talkingPoints: [
          "Trả lời comment khán giả",
          "Tư vấn pháp lý cơ bản",
          "Tránh: Xin số điện thoại công khai trên live (vi phạm redirect)"
        ],
        forbiddenCategoryIds: ["CAT_07"]
      },
      {
        title: "CTA: Đăng ký tham quan",
        durationMinutes: 5,
        talkingPoints: [
          "Mời đăng ký tham quan nhà mẫu thực tế",
          "Gửi tài liệu qua form đăng ký (Link bio)",
          "Cảm ơn và hẹn gặp lại"
        ],
        forbiddenCategoryIds: ["CAT_06"]
      }
    ]
  },
  {
    id: "TEMPLATE_VILLA",
    name: "3. Biệt thự - Tăng nhận diện thương hiệu",
    description: "Phong cách sang trọng, kể chuyện (storytelling), không sales quá đà.",
    defaultDuration: 45,
    propertyType: "Biệt thự nghỉ dưỡng",
    objective: "Tăng nhận diện thương hiệu (Awareness)",
    blocks: [
      {
        title: "Cảm hứng & Câu chuyện thương hiệu",
        durationMinutes: 5,
        talkingPoints: [
          "Câu chuyện về vùng đất/kiến trúc",
          "Triết lý của chủ đầu tư",
          "Hình ảnh TVC cảm xúc (Mood & Tone sang trọng)"
        ],
        forbiddenCategoryIds: []
      },
      {
        title: "Kiến trúc & Nghệ thuật",
        durationMinutes: 10,
        talkingPoints: [
          "Phân tích ngôn ngữ thiết kế",
          "Đơn vị vận hành/thiết kế danh tiếng (nêu tên chính xác)",
          "Sự độc bản, giới hạn (nhưng không tạo khan hiếm giả)"
        ],
        forbiddenCategoryIds: ["CAT_02"]
      },
      {
        title: "Đặc quyền chủ nhân",
        durationMinutes: 10,
        talkingPoints: [
          "Hệ tiện ích 5 sao: Golf, Marina, Private Club",
          "Cộng đồng cư dân tinh hoa (minh họa phong cách sống)",
          "Tránh hình ảnh tiệc tùng phản cảm/gợi dục"
        ],
        forbiddenCategoryIds: ["CAT_04"]
      },
      {
        title: "Giá trị truyền đời (Long-term)",
        durationMinutes: 10,
        talkingPoints: [
          "Tài sản kế thừa cho thế hệ sau",
          "Giá trị tinh thần & sức khỏe",
          "Tránh: 'Mua xong bán lại lời ngay X tỷ'"
        ],
        forbiddenCategoryIds: ["CAT_01"]
      },
      {
        title: "Hỏi đáp cùng Chuyên gia",
        durationMinutes: 5,
        talkingPoints: [
          "Giao lưu nhẹ nhàng",
          "Chia sẻ quan điểm sống",
          "Không tranh luận gay gắt/xúc phạm quan điểm khác"
        ],
        forbiddenCategoryIds: ["CAT_03"]
      },
      {
        title: "Lời mời Private Event",
        durationMinutes: 5,
        talkingPoints: [
          "Mời tham dự sự kiện trà chiều/trải nghiệm thực tế",
          "CTA: 'Nhắn tin để nhận thiệp mời riêng'",
          "Kết thúc livestream đẳng cấp"
        ],
        forbiddenCategoryIds: ["CAT_07"]
      }
    ]
  }
];
