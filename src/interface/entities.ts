export namespace mastodonentities {

  export interface Application {

  }

  export interface Account {
    // The ID of the account
    id: string
    // The username of the account
    username: string
    // Equals username for local users, includes @domain for remote ones
    acct: string
    // The account's display name
    display_name: string
    // Boolean for when the account cannot be followed without waiting for approval first
    locked: string
    // The time the account was created
    created_at: string
    // The number of followers for the account
    followers_count: string
    // The number of accounts the given account is following
    following_count: string
    // The number of statuses the account has made
    statuses_count: string
    // Biography of user
    note: string
    // URL of the user's profile page (can be remote)
    url: string
    // URL to the avatar image
    avatar: string
    // URL to the avatar static image (gif)
    avatar_static: string
    // URL to the header image
    header: string
    // URL to the header static image (gif)
    header_static: string
    // Array of Emoji in account username and note
    emojis: Array<string>
    // If the owner decided to switch accounts, new account is in this attribute
    moved?: any
    // Array of profile metadata field, each element has 'name' and 'value'
    fields?: Array<any>
    // Boolean to indicate that the account performs automated actions
    bot?: boolean
  }

  export interface Status {
    // The ID of the status
    id: string
    // A Fediverse-unique resource ID
    uri: string
    // URL to the status page (can be remote)
    url?: string
    // The Account which posted the status
    account: Account
    // null or the ID of the status it replies to
    // in_reply_to_id and in_reply_to_account_id are null if the status that is replied to is unknown
    in_reply_to_id?: string
    // null or the ID of the account it replies to
    in_reply_to_account_id?: string
    // null or the reblogged Status
    reblog?: Status
    // Body of the status; this will contain HTML (remote HTML already sanitized)
    content: string
    // The time the status was created
    created_at: string
    // An array of Emoji
    emojis: Array<Emoji>
    // The number of replies for the status
    replies_count: number
    // The number of reblogs for the status
    reblogs_count: number
    // The number of favourites for the status
    favourites_count: number
    // Whether the authenticated user has reblogged the status
    reblogged?: boolean
    // Whether the authenticated user has favourited the status
    favourited?: boolean
    // Whether the authenticated user has muted the conversation this status from
    muted?: boolean
    // Whether media attachments should be hidden by default
    // NOTE: When spoiler_text is present, sensitive is true
    sensitive?: boolean
    // If not empty, warning text that should be displayed before the actual content
    spoiler_text: string
    // One of: public, unlisted, private, direct
    visibility: string
    // An array of Attachments
    media_attachments: Array<Attachment>
    // An array of Mentions
    mentions: Array<Mention>
    // An array of Tags
    tags: Array<Tag>
    // Application from which the status was posted
    application?: Application
    // The detected language for the status, if detected
    language?: string
    // Whether this is the pinned status for the account that posted it
    pinned?: boolean
  }

  export interface Context {
    ancestors: Array<Status>
    descendants: Array<Status>
  }

  export interface Emoji {

  }

  export interface Attachment {

  }

  export interface Mention {

  }

  export interface Tag {

  }
}