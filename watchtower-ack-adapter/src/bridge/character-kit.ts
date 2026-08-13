/**
 * Character Kit client — ONLY Character Kit-facing integration.
 *
 * Connects conceptually to:
 *   - node/enforcer/agent_enforcer_daemon.js (socket server)
 *   - node/bin/ack.js hook <framework>
 *   - python/agent_character_kit/enforcer.py (Enforcer.execute_tool)
 *   - python/hermes_plugin/
 *   - supervise.py
 *
 * Contains NO Watchtower API calls, NO Watchtower event schema logic,
 * NO Watchtower credentials.
 *
 * NOTE: Phase 2/3 of the blueprint. This scaffold defines the boundary +
 * an interface; the concrete socket/python transport is filled in during
 * Phase 2. The interface mirrors the verified Enforcer surface:
 *   execute_tool(tool, params) -> EnforcementResult (allow/block + evidence)
 */

import type { EnforcementResult } from "../contracts.js";

export interface CharacterKitClient {
  /** Gate a tool call. Fail-closed: throws if the daemon is unreachable. */
  gateAction(tool: string, params?: Record<string, unknown>): Promise<EnforcementResult>;
  /** Inject a habit challenge into the agent's context. */
  injectHabit(habitId: string, summary: string): Promise<void>;
  /** Capture an acknowledgment from the agent. */
  submitAcknowledgement(ackText: string): Promise<void>;
  /** Local heartbeat (python Enforcer.heartbeat). */
  heartbeat(): Promise<void>;
  /** True if the enforcement socket is reachable. */
  isConnected(): boolean;
}

/**
 * Factory placeholder. Real implementation (Phase 2) wires the socket path
 * from config.characterKitSocket or the Python EnforcerClient.
 */
export function createCharacterKitClient(_socket?: string): CharacterKitClient {
  // Boundary stub: the bridge must not depend on Character Kit internals,
  // only on the EnforcementResult contract. Concrete transport added in Phase 2.
  return {
    async gateAction(): Promise<EnforcementResult> {
      throw new Error("character-kit unavailable; action blocked");
    },
    async injectHabit(): Promise<void> {
      throw new Error("character-kit unavailable");
    },
    async submitAcknowledgement(): Promise<void> {
      throw new Error("character-kit unavailable");
    },
    async heartbeat(): Promise<void> {
      throw new Error("character-kit unavailable");
    },
    isConnected(): boolean {
      return false;
    },
  };
}
