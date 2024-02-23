import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const message = `ご覧いただきありがとうございます。
私の名前はki0i0ro0です。現在、フロントエンドエンジニアとして数年間の経験を積んでいます。
Reactを中心に、最新のフロントエンド技術を活用してユーザーフレンドリーなウェブアプリケーションを開発することに情熱を注いでいます。
これまでのキャリアの中で、私はチームリーダーとしての役割を果たし、プロジェクトの成功に向けてチームを指導し、サポートしてきました。
また、コードの品質とパフォーマンスを向上させるためのベストプラクティスを常に追求しています。
私の趣味はジョギングです。新しいルートを探索したり、自己ベストタイムを更新することで、自己改善と持続性の重要性を常に思い出させています。
これは、私がエンジニアリングに取り組む方法にも反映されています。
私のスキルと経験が、あなたのプロジェクトに価値をもたらすことを期待しています。`;

function Contact() {
  return (
    <section id="profile">
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        <PersonIcon />
        プロフィール
      </Typography>
      <Typography
        variant="body1"
        sx={{ whiteSpace: "pre-wrap", lineHeight: 2.5 }}
      >
        {message}
      </Typography>
    </section>
  );
}

export default Contact;
