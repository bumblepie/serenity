(function() {var implementors = {};
implementors["serenity"] = [{"text":"impl From&lt;Channel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Channel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl From&lt;PrivateChannel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PrivateChannel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl From&lt;GuildChannel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a GuildChannel&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl From&lt;Message&gt; for MessageId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Message&gt; for MessageId","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Message&gt; for MessageReference","synthetic":false,"types":[]},{"text":"impl From&lt;(ChannelId, MessageId)&gt; for MessageReference","synthetic":false,"types":[]},{"text":"impl From&lt;char&gt; for ReactionType","synthetic":false,"types":[]},{"text":"impl From&lt;Emoji&gt; for ReactionType","synthetic":false,"types":[]},{"text":"impl From&lt;EmojiId&gt; for ReactionType","synthetic":false,"types":[]},{"text":"impl From&lt;EmojiIdentifier&gt; for ReactionType","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Event&gt; for EventType","synthetic":false,"types":[]},{"text":"impl From&lt;Emoji&gt; for EmojiId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Emoji&gt; for EmojiId","synthetic":false,"types":[]},{"text":"impl From&lt;PartialGuild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PartialGuild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;GuildInfo&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a GuildInfo&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;InviteGuild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a InviteGuild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;Guild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Guild&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;Integration&gt; for IntegrationId","synthetic":false,"types":[]},{"text":"impl From&lt;Role&gt; for RoleId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Role&gt; for RoleId","synthetic":false,"types":[]},{"text":"impl From&lt;PartialGuild&gt; for GuildContainer","synthetic":false,"types":[]},{"text":"impl From&lt;GuildId&gt; for GuildContainer","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for GuildContainer","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a AttachmentId&gt; for AttachmentId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for AttachmentId","synthetic":false,"types":[]},{"text":"impl From&lt;AttachmentId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;AttachmentId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a ApplicationId&gt; for ApplicationId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for ApplicationId","synthetic":false,"types":[]},{"text":"impl From&lt;ApplicationId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;ApplicationId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a ChannelId&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for ChannelId","synthetic":false,"types":[]},{"text":"impl From&lt;ChannelId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;ChannelId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a EmojiId&gt; for EmojiId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for EmojiId","synthetic":false,"types":[]},{"text":"impl From&lt;EmojiId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;EmojiId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a GuildId&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for GuildId","synthetic":false,"types":[]},{"text":"impl From&lt;GuildId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;GuildId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a IntegrationId&gt; for IntegrationId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for IntegrationId","synthetic":false,"types":[]},{"text":"impl From&lt;IntegrationId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;IntegrationId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a MessageId&gt; for MessageId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for MessageId","synthetic":false,"types":[]},{"text":"impl From&lt;MessageId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;MessageId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a RoleId&gt; for RoleId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for RoleId","synthetic":false,"types":[]},{"text":"impl From&lt;RoleId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;RoleId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a StickerId&gt; for StickerId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for StickerId","synthetic":false,"types":[]},{"text":"impl From&lt;StickerId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;StickerId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a StickerPackId&gt; for StickerPackId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for StickerPackId","synthetic":false,"types":[]},{"text":"impl From&lt;StickerPackId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;StickerPackId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a UserId&gt; for UserId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for UserId","synthetic":false,"types":[]},{"text":"impl From&lt;UserId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;UserId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a WebhookId&gt; for WebhookId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for WebhookId","synthetic":false,"types":[]},{"text":"impl From&lt;WebhookId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;WebhookId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a AuditLogEntryId&gt; for AuditLogEntryId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for AuditLogEntryId","synthetic":false,"types":[]},{"text":"impl From&lt;AuditLogEntryId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;AuditLogEntryId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a InteractionId&gt; for InteractionId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for InteractionId","synthetic":false,"types":[]},{"text":"impl From&lt;InteractionId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;InteractionId&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a CommandId&gt; for CommandId","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for CommandId","synthetic":false,"types":[]},{"text":"impl From&lt;CommandId&gt; for u64","synthetic":false,"types":[]},{"text":"impl From&lt;CommandId&gt; for i64","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Channel&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;ChannelId&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ ChannelCategory&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ GuildChannel&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ PrivateChannel&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ CurrentUser&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Member&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;UserId&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ User&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;RoleId&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Role&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;EmojiId&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;(EmojiId, bool)&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;&amp;'_ Emoji&gt; for Mention","synthetic":false,"types":[]},{"text":"impl From&lt;CurrentUser&gt; for User","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a CurrentUser&gt; for User","synthetic":false,"types":[]},{"text":"impl From&lt;CurrentUser&gt; for UserId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a CurrentUser&gt; for UserId","synthetic":false,"types":[]},{"text":"impl From&lt;Member&gt; for UserId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Member&gt; for UserId","synthetic":false,"types":[]},{"text":"impl From&lt;User&gt; for UserId","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a User&gt; for UserId","synthetic":false,"types":[]},{"text":"impl From&lt;Embed&gt; for CreateEmbed","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for Timestamp","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Timestamp","synthetic":false,"types":[]},{"text":"impl&lt;'a, Tz:&nbsp;TimeZone&gt; From&lt;&amp;'a DateTime&lt;Tz&gt;&gt; for Timestamp <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tz::Offset: Display,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;E&gt; From&lt;E&gt; for Error&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;char&gt; for Delimiter","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for Delimiter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a String&gt; for Delimiter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for Delimiter","synthetic":false,"types":[]},{"text":"impl From&lt;bool&gt; for WithWhiteSpace","synthetic":false,"types":[]},{"text":"impl From&lt;(bool, bool)&gt; for WithWhiteSpace","synthetic":false,"types":[]},{"text":"impl From&lt;(bool, bool, bool)&gt; for WithWhiteSpace","synthetic":false,"types":[]},{"text":"impl From&lt;ErrorResponse&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;InvalidHeaderValue&gt; for Error","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;Request&lt;'a&gt;&gt; for RatelimitedRequest&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a [u8], &amp;'_ str)&gt; for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a str&gt; for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a Path&gt; for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;&amp;'a PathBuf&gt; for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; From&lt;(&amp;'a File, &amp;'_ str)&gt; for AttachmentType&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl From&lt;i32&gt; for Colour","synthetic":false,"types":[]},{"text":"impl From&lt;u32&gt; for Colour","synthetic":false,"types":[]},{"text":"impl From&lt;u64&gt; for Colour","synthetic":false,"types":[]},{"text":"impl From&lt;(u8, u8, u8)&gt; for Colour","synthetic":false,"types":[]},{"text":"impl From&lt;ContentModifier&gt; for Content","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;ParseIntError&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;InvalidHeaderValue&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()