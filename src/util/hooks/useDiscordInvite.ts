const DISCORD_INVITE_CODE = process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE

const useDiscordInvite = (defaultDiscordInviteCode = ''): string => (
  `https://discord.gg/${DISCORD_INVITE_CODE ?? defaultDiscordInviteCode}`
)

export default useDiscordInvite
