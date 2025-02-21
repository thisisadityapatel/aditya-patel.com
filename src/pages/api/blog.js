import React from 'react';
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const blogDirectory = path.join(process.cwd(), '_data/blog');
    const filenames = fs.readdirSync(blogDirectory);

    const posts = filenames.map(filename => {
        const filePath = path.join(blogDirectory, filename);
        const contents = fs.readFileSync(filePath, 'utf8');
        const lines = contents.split('\n');
        return {
            title: lines[0].replace('# ', ''),
            date: lines[1].replace('Date: ', ''),
            endpoint: filename.replace('.md', '')
        };
    });

    res.status(200).json(posts);
}