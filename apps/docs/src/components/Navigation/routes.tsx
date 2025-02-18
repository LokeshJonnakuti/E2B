import {
  BarChart,
  Book,
  Braces,
  ChevronRightSquare,
  Cog,
  Cpu,
  DollarSign,
  File,
  FileDown,
  FileUp,
  Folder,
  FolderTree,
  Hammer,
  HardDrive,
  KeyRound,
  Link,
  PencilRuler,
  PlaySquare,
  RefreshCw,
  Settings,
  ShieldQuestion,
  Terminal,
  TerminalSquare,
  Timer,
  Variable,
  Wrench,
  BookOpen,
} from 'lucide-react'

import Image from 'next/image'
import logoNode from '@/images/logos/node.svg'
import logoPython from '@/images/logos/python.svg'

export const routes = [
  {
    title: 'Getting Started',
    links: [
      {
        title: 'Installation',
        href: '/',
      },
      {
        title: 'helloWorld.[ts|js]',
        href: '/hello-world/js',
        icon: <Image src={logoNode} width={20} height={20} alt="Python logo" />,
        isFontMono: true,
      },
      {
        title: 'hello_world.py',
        href: '/hello-world/py',
        icon: <Image src={logoPython} width={20} height={20} alt="Python logo" />,
        isFontMono: true,
      },
      {
        title: 'Supported LLMs and AI frameworks',
        href: '/supported',
      },
      // {
      //   title: 'What\'s Code Interpreting?',
      //   href: '/code-interpreting',
      // },
      {
        icon: <KeyRound strokeWidth={1} size={20} />,
        title: 'API Key',
        href: '/getting-started/api-key',
      },
      {
        icon: <DollarSign strokeWidth={1} size={20} />,
        title: 'Pricing',
        href: '/pricing',
      },
      {
        icon: <BarChart strokeWidth={1} size={20} />,
        title: 'Track usage',
        href: '/usage',
      },
      {
        icon: <ShieldQuestion strokeWidth={1} size={20} />,
        title: 'Getting help',
        href: '/getting-help',
      },
    ],
  },
  {
    title: 'Guides',
    links: [
      {
        icon: <BookOpen strokeWidth={1} size={20} />,
        title: 'E2B Cookbook',
        href: 'https://github.com/e2b-dev/e2b-cookbook/tree/main',
      },
      {
        icon: <Hammer strokeWidth={1} size={20} />,
        title: 'Guide: Code Interpreter with Llama-3',
        href: 'https://github.com/e2b-dev/e2b-cookbook/tree/main/examples/llama-3-code-interpreter',
      },
      // {
      //   icon: <Hammer strokeWidth={1} size={20} />,
      //   title: 'Guide: Code Interpreter with OpenAI models',
      //   href: '/guide/simple-gpt4-code-interpreter',
      // },
      {
        icon: <Hammer strokeWidth={1} size={20} />,
        title: 'Guide: Code Interpreter with Claude 3 Opus',
        href: 'https://github.com/e2b-dev/e2b-cookbook/blob/main/examples/claude-code-interpreter/claude_code_interpreter.ipynb',
      },
      // {
      //   icon: <Hammer strokeWidth={1} size={20} />,
      //   title: 'Guide: Secure Sandbox for Devin-like agent',
      //   href: '/guide/simple-gpt4-code-interpreter',
      // },
      // {
      //   icon: <Hammer strokeWidth={1} size={20} />,
      //   title: 'Guide: Generative UI with Next.js',
      //   href: '/guide/simple-gpt4-code-interpreter',
      // },
      {
        icon: <Hammer strokeWidth={1} size={20} />,
        title: 'Guide: Add code interpreter to LangChain',
        href: 'https://github.com/e2b-dev/e2b-cookbook/tree/main/examples/langchain-python',
      },
      {
        icon: <Hammer strokeWidth={1} size={20} />,
        title: 'Guide: Add code interpreter to LangGraph',
        href: 'https://github.com/e2b-dev/e2b-cookbook/tree/main/examples/langgraph-python',
      },
      // {
      //   icon: <Hammer strokeWidth={1} size={20} />,
      //   title: 'Guide: Upload and analyze CSV files with AI',
      //   href: '/guide/simple-gpt4-code-interpreter',
      // },
      // {
      //   icon: <Hammer strokeWidth={1} size={20} />,
      //   title: 'Guide: Customize sandbox compute (TODO: Move this away from guides?)',
      //   href: '/guide/simple-gpt4-code-interpreter',
      // },
    ],
  },
  {
    title: 'E2B SDK: Code Interpreter',
    links: [
      {
        title: 'Installation',
        href: '/code-interpreter/installation',
      },
      {
        icon: <Terminal strokeWidth={1} size={20} />,
        title: 'AI Code Execution',
        href: '/code-interpreter/execution',
      },
      {
        icon: <Book strokeWidth={1} size={20} />,
        title: 'Examples',
        href: '/code-interpreter/examples',
      },
      {
        icon: <Wrench strokeWidth={1} size={20} />,
        title: 'Supported languages',
        href: '/code-interpreter/template',
      },
      {
        icon: <Wrench strokeWidth={1} size={20} />,
        title: 'Customization',
        href: '/code-interpreter/template',
      },
      {
        icon: <Cog strokeWidth={1} size={20} />,
        title: 'Kernels',
        href: '/code-interpreter/kernels',
      },
    ],
  },
  {
    title: 'E2B SDK: Core Sandbox',
    links: [
      {
        title: 'Overview',
        href: '/sandbox/overview',
      },
      {
        icon: <Cpu strokeWidth={1} size={20} />,
        title: 'Compute',
        href: '/sandbox/compute',
      },
      {
        icon: <PencilRuler strokeWidth={1} size={20} />,
        title: 'Customization',
        href: '/sandbox/custom',
      },
      {
        icon: <Variable strokeWidth={1} size={20} />,
        title: 'Environment Variables',
        href: '/sandbox/api/envs',
      },
      {
        icon: <FolderTree strokeWidth={1} size={20} />,
        title: 'Filesystem',
        href: '/sandbox/api/filesystem',
      },
      {
        icon: <ChevronRightSquare strokeWidth={1} size={20} />,
        title: 'Process',
        href: '/sandbox/api/process',
      },
      {
        icon: <Folder strokeWidth={1} size={20} />,
        title: 'Working Directory',
        href: '/sandbox/api/cwd',
      },
      {
        icon: <Link strokeWidth={1} size={20} />,
        title: 'Sandbox URL',
        href: '/sandbox/api/url',
      },
      {
        icon: <FileUp strokeWidth={1} size={20} />,
        title: 'Upload Files',
        href: '/sandbox/api/upload',
      },
      {
        icon: <FileDown strokeWidth={1} size={20} />,
        title: 'Download Files',
        href: '/sandbox/api/download',
      },
      {
        icon: <Timer strokeWidth={1} size={20} />,
        title: 'Timeouts',
        href: '/sandbox/api/timeouts',
      },
      {
        icon: <RefreshCw strokeWidth={1} size={20} />,
        title: 'Connect to running sandbox',
        href: '/sandbox/api/reconnect',
      },
      {
        icon: <Braces strokeWidth={1} size={20} />,
        title: 'Sandbox metadata',
        href: '/sandbox/api/metadata',
      },
    ],
  },
  {
    title: 'CLI',
    links: [
      {
        icon: <Settings strokeWidth={1} size={20} />,
        title: 'Installation',
        href: '/cli/installation',
      },
      {
        icon: <TerminalSquare strokeWidth={1} size={20} />,
        title: 'Commands',
        href: '/cli/commands',
      },
    ],
  },
  {
    title: 'Custom Sandboxes',
    links: [
      {
        title: 'Overview',
        href: '/sandbox/templates/overview',
      },
      {
        icon: <File strokeWidth={1} size={20} />,
        title: 'Template File',
        href: '/sandbox/templates/template-file',
      },
      {
        icon: <PlaySquare strokeWidth={1} size={20} />,
        title: 'Start Command',
        href: '/sandbox/templates/start-cmd',
      },
      {
        icon: <Hammer strokeWidth={1} size={20} />,
        title: 'Guide: Creating Custom Sandbox',
        href: '/guide/custom-sandbox',
      },
      {
        icon: <HardDrive strokeWidth={1} size={20} />,
        title: 'Connecting buckets to persist data',
        href: '/guide/connect-bucket',
      },
    ],
  },
]
