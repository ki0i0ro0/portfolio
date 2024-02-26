import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

function createData(name: string, url: string, description: string) {
  return { name, url, description };
}

const rows = [
  createData(
    "recipe",
    "https://github.com/ki0i0ro0/recipe",
    "Next.js Server Actionsで作成したフルスタックアプリ(Next.js,Prisma,PostgreSQL)",
  ),
  createData(
    "html-websocket-tester",
    "https://github.com/ki0i0ro0/html-websocket-tester",
    "websocketの導通確認用htmlアプリ(websocket)",
  ),
  createData(
    "environment-grpc",
    "https://github.com/ki0i0ro0/environment-grpc",
    "gRPCの実行環境(Vue3,gRPC-web,Docker)",
  ),
  createData(
    "misc",
    "https://github.com/ki0i0ro0/misc",
    "その他のコード置き場",
  ),
];

function Code() {
  return (
    <>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: "bold" }}
        gutterBottom
      >
        <CodeIcon />
        コード
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>リポジトリ名</TableCell>
              <TableCell>説明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Code;
