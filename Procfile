web: node . --server
db: node . --db "mongodb+srv://davidpangrib001:9JhAM$$u9K5Ye8x@cluster0.7wmhy2y.mongodb.net/?retryWrites=true&w=majority" --autocleartmp --restrict
worker: npx pm2 start npm --node-args="--optimize_for_size --max_old_space_size=460" -- run db && npx pm2 logs
