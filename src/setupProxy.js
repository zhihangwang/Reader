import proxy from "http-proxy-middleware";
export default function(app) {
    app.use(
        proxy("/qidian", {
            target: "https://www.qidian.com",
            changeOrigin: true,
        })
    );
    app.use(
        proxy("/biqu", {
            target: "https://www.biqooge.com",
            changeOrigin: true,
        })
    );
}