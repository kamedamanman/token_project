const express = require('express');
const app = express();
const PORT = 3000;

// 静的ファイルの提供
app.use(express.static('public'));

// トークン生成とレスポンスのルーティング
app.get('/generate-token', (req, res) => {
    const fail = req.query.fail; // クエリパラメータから失敗フラグを取得

    if (fail === 'true') {
        // 失敗フラグがtrueの場合はエラーページへリダイレクト
        res.redirect('/error.html');
    } else {
        try {
            // トークン生成ロジック
            const token = Math.random().toString(36).substring(2, 15);
            res.redirect(`/success.html?token=${token}`);
        } catch (error) {
            res.redirect('/error.html');
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
