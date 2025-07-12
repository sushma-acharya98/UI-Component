import Link from 'next/link'
import './page.css';

const Page = () => {
	return (
		<>
			<div className="page-container">
				<h1 className="task-title">Task List</h1>
				<div className='task-list'>
					<Link prefetch={false} href="/task1" className="task-link">
						Task-1
					</Link>
					<Link prefetch={false} href="/task2" className="task-link">
						Task-2
					</Link>
					<Link prefetch={false} href="/task3" className="task-link">
						Task-3
					</Link>
					<Link prefetch={false} href="/task4" className="task-link">
						Task-4
					</Link>
				</div>
			</div>
		</>
	)
}

export default Page
