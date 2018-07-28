# TypeScript, GraphQL and MySQL

## Requirements

- NodeJS 8+ is required to run this service.
- Install MySQL

Then:

## Starting the Dev Server

2. Run `npm install`
3. Run `npm run gulp`
4. Run `npm run dev`

## Visual interface

- Open in your browser `localhost:3000/GraphQL`

## Environment Variables

- `NODE_ENV` - Specifying the environment in which you want to run the application
- `JWT_SECRET` - Key to JWT encryption

## Available Queries
- users

```
query getUsersList($first: Int, $offset: Int) {
	users(first: $first, offset: $offset) {
		id
		name
		email
		createdAt
		posts {
			id
			title
			createdAt
		}
	}
}
```

- user

```
query getUserById($id: ID!) {
	user(id: $id) {
		id
		name
		email
		createdAt
		posts {
			title
			createdAt
		}
	}
}
```

- post

```
query getPostsList($first: Int, $offset: Int) {
  posts(first: $first, offset: $offset) {
    id
    title
    content
    author {
      name
      email
    }
    comments {
      comment
    }
  }
}
```

- post

```
query getPostById($id: ID!) {
	post(id: $id) {
		id
		title
		content
		author {
			name
			email
		}
		comments {
			comment
		}
	}
}
```

- comment

```
query getCommentsListByPost($postId: ID!, $first: Int, $offset: Int) {
	commentsByPost(postId: $postId, first: $first, offset: $offset) {
		id
		comment
		user {
			name
			email
		}
		post {
			title
		}
	}
}
```

## TODO LIST
- Implements DataLoaders
- Implements Tests