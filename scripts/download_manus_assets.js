import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..', 'client', 'src');
const storageDir = path.join(__dirname, '..', 'client', 'public', 'manus-storage');

// 1. Cloudfront URL mappings (Cloudfront -> local /manus-storage/ path)
const urlReplacements = [
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-hero-booth-9udTMKwmSMnYLiux7h7TU9.webp",
    to: "/manus-storage/pfs-hero-booth-9udTMKwmSMnYLiux7h7TU9.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-automotive-booth-5Xw6Nq9kErF5rCQakrcqSS.webp",
    to: "/manus-storage/pfs-automotive-booth-5Xw6Nq9kErF5rCQakrcqSS.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-aerospace-booth-gQ3YiB7j5kqdTwxXZsWzPk.webp",
    to: "/manus-storage/pfs-aerospace-booth-gQ3YiB7j5kqdTwxXZsWzPk.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-careers-hero-6RYnuymp4L3HSjNSxm4AVY.webp",
    to: "/manus-storage/pfs-careers-hero-6RYnuymp4L3HSjNSxm4AVY.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-careers-team-NFnR4urUc2YUSREk6KyZjd.webp",
    to: "/manus-storage/pfs-careers-team-NFnR4urUc2YUSREk6KyZjd.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-part-seals-MxbVGeBtpPQrw4J8RrUxdn.webp",
    to: "/manus-storage/pfs-part-seals-MxbVGeBtpPQrw4J8RrUxdn.webp"
  },
  {
    from: "https://d2xsxph8kpxj0f.cloudfront.net/310519663492797025/Qb3z7L9Ycd6rmfwTi5bWop/pfs-service-tech-1_8685fcab.jpg",
    to: "/manus-storage/pfs-service-tech-1_8685fcab.jpg"
  }
];

// 2. Missing filename mappings (Missing filename -> valid local file)
const missingFileReplacements = [
  {
    from: "/manus-storage/pfs-powder-coating-render_d6e2b3a1.jpg",
    to: "/manus-storage/pfs-render-powder-booth_3dd083c1.jpg"
  },
  {
    from: "/manus-storage/pfs-conveyor-line_9c4176ba.png",
    to: "/manus-storage/pfs-conveyor-line-real_78831864.jpg"
  },
  {
    from: "/manus-storage/pfs-usa-flag_c1b7e9f2.png",
    to: "/manus-storage/pfs-usa-flag_8fca512e.jpg"
  },
  {
    from: "/manus-storage/pfs-batch-oven-card_f2b3e9a1.jpg",
    to: "/manus-storage/HEROOVEN_23aea520.png"
  },
  {
    from: "/manus-storage/orig-render-batch-oven_3d3b6c3f.webp",
    to: "/manus-storage/orig-render-conveyor-oven_7e2e504a.webp"
  }
];

const allReplacements = [...urlReplacements, ...missingFileReplacements];

let modifiedCount = 0;

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && /\.(tsx?|jsx?|css|html|json)$/i.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = false;

      for (const item of allReplacements) {
        if (content.includes(item.from)) {
          content = content.split(item.from).join(item.to);
          updated = true;
          console.log(`[REPLACED] in ${path.relative(rootDir, fullPath)}:`);
          console.log(`  ${item.from} -> ${item.to}`);
        }
      }

      if (updated) {
        fs.writeFileSync(fullPath, content, 'utf8');
        modifiedCount++;
      }
    }
  }
}

console.log('Starting Manus asset synchronization and URL update...');
processDirectory(rootDir);
console.log(`\nFinished! Total modified files: ${modifiedCount}`);
