#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.8.0')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format', 'stylish')
    .argument('<filepath1>')
    .argument('<filepath2>');
    
    program.parse();
 