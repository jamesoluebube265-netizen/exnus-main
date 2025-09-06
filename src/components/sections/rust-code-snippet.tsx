import { Terminal } from "lucide-react";

const codeSnippet = `
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program::invoke_signed,
    pubkey::Pubkey,
    system_instruction,
    sysvar::{rent::Rent, Sysvar},
};

// Define the program's entrypoint
entrypoint!(process_instruction);

// Instruction processor
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Exnus Protocol: Reward Distribution Instruction");

    // Create an iterator for the accounts
    let account_info_iter = &mut accounts.iter();

    // Get the required accounts
    let authority_account = next_account_info(account_info_iter)?; // The authority account (e.g., the protocol's treasury)
    let user_account = next_account_info(account_info_iter)?;      // The user receiving the reward
    let system_program = next_account_info(account_info_iter)?;   // The Solana system program

    // Ensure the authority account has signed the transaction
    if !authority_account.is_signer {
        msg!("Error: Authority account signature is missing.");
        return Err(ProgramError::MissingRequiredSignature);
    }
    
    // Ensure the program owns the authority account
    if authority_account.owner != program_id {
        msg!("Error: Authority account is not owned by the program.");
        return Err(ProgramError::IncorrectProgramId);
    }

    // Safely deserialize the reward amount from instruction data
    let reward_amount = instruction_data
        .get(..8)
        .and_then(|slice| slice.try_into().ok())
        .map(u64::from_le_bytes)
        .ok_or(ProgramError::InvalidInstructionData)?;

    msg!("Attempting to transfer {} lamports to user {}", reward_amount, user_account.key);

    // Create the transfer instruction
    let transfer_instruction = system_instruction::transfer(
        authority_account.key,
        user_account.key,
        reward_amount,
    );

    // Invoke the system program to perform the transfer
    // This requires the authority's signature, which we've already verified.
    invoke_signed(
        &transfer_instruction,
        &[
            authority_account.clone(),
            user_account.clone(),
            system_program.clone(),
        ],
        // If the authority account were a PDA, seeds would be provided here.
        &[], 
    )?;

    msg!("Successfully distributed {} lamports to user {}", reward_amount, user_account.key);

    Ok(())
}
`;

export function RustCodeSnippet() {
  return (
    <div className="bg-[#282c34] rounded-lg overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700/50">
        <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Secure Reward Distribution (Rust)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <pre className="language-rust p-4 text-sm overflow-x-auto">
        <code className="language-rust">{codeSnippet}</code>
      </pre>
      <div className="px-4 py-2 text-xs text-gray-400 bg-gray-700/50">
        Example of a secure, signed transaction for distributing rewards within the Exnus Protocol on Solana.
      </div>
    </div>
  );
}
