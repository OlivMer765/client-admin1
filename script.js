const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
        let p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.jsx') || p.endsWith('.js')) {
            let c = fs.readFileSync(p, 'utf8');
            
            let nc = c.replace(/\.\.\/\.\.\/\.\.\/\.\.\/shared\//g, '../../../shared/');
            nc = nc.replace(/\.\.\/\.\.\/\.\.\/auth\//g, '../../auth/');
            
            if (c !== nc) {
                fs.writeFileSync(p, nc);
                console.log('Fixed', p);
            }
        }
    });
}
walk('./src');
